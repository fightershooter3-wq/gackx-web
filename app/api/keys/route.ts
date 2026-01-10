import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import crypto from 'crypto';

export async function POST(request: Request) {
  const { userId, name } = await request.json();
  const apiKey = `gk_${crypto.randomBytes(24).toString('hex')}`;
  const keyHash = crypto.createHash('sha256').update(apiKey).digest('hex');
  
  await query(
    'INSERT INTO api_keys (user_id, key_hash, name) VALUES ($1, $2, $3)',
    [userId, keyHash, name]
  );
  
  return NextResponse.json({ apiKey });
}
