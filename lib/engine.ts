import { query } from './db';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key',
});

export async function runAutomation(automationId: string, inputData: any) {
  // 1. Create a run record
  const runRes = await query(
    'INSERT INTO automation_runs (automation_id, status) VALUES ($1, $2) RETURNING id',
    [automationId, 'running']
  );
  const runId = runRes.rows[0].id;

  try {
    // 2. Get steps
    const stepsRes = await query(
      'SELECT * FROM automation_steps WHERE automation_id = $1 ORDER BY step_order ASC',
      [automationId]
    );
    const steps = stepsRes.rows;

    let currentData = inputData;

    // 3. Execute steps
    for (const step of steps) {
      await log(runId, 'info', `Executing step ${step.step_order}: ${step.type}`);
      
      if (step.type === 'ai') {
        currentData = await executeAIStep(step.config, currentData);
      } else if (step.type === 'action') {
        currentData = await executeActionStep(step.config, currentData);
      }
    }

    // 4. Finish run
    await query(
      'UPDATE automation_runs SET status = $1, result = $2, finished_at = CURRENT_TIMESTAMP WHERE id = $3',
      ['success', JSON.stringify(currentData), runId]
    );
    return currentData;

  } catch (error: any) {
    await log(runId, 'error', error.message);
    await query(
      'UPDATE automation_runs SET status = $1, finished_at = CURRENT_TIMESTAMP WHERE id = $2',
      ['failed', runId]
    );
    throw error;
  }
}

async function executeAIStep(config: any, input: any) {
  const prompt = `${config.prompt}\n\nInput Data: ${JSON.stringify(input)}`;
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
  });
  return { output: response.choices[0].message.content };
}

async function executeActionStep(config: any, input: any) {
  // Mock action execution (e.g., sending email, webhook)
  console.log('Executing action:', config.actionType, 'with input:', input);
  return { ...input, action_status: 'completed' };
}

async function log(runId: string, level: string, message: string) {
  await query(
    'INSERT INTO logs (run_id, level, message) VALUES ($1, $2, $3)',
    [runId, level, message]
  );
}
