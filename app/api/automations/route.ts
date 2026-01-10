import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: Request) {
  // Return both user automations and system templates
  const userId = '00000000-0000-0000-0000-000000000000'; 
  const res = await query(
    'SELECT * FROM automations WHERE user_id = $1 OR user_id = $2 ORDER BY created_at DESC', 
    [userId, '00000000-0000-0000-0000-000000000000']
  );
  return NextResponse.json(res.rows);
}

export async function POST(request: Request) {
  const { name, description, userId } = await request.json();
  const res = await query(
    'INSERT INTO automations (name, description, user_id) VALUES ($1, $2, $3) RETURNING *',
    [name, description, userId]
  );
  return NextResponse.json(res.rows[0]);
}
