import { NextResponse } from 'next/server';
import { runAutomation } from '@/lib/engine';

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const inputData = await request.json();
  try {
    const result = await runAutomation(id, inputData);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
