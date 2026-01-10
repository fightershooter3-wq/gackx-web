import { NextResponse } from 'next/server';
import { login } from '@/lib/auth';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = await login(email, password);
  if (user) {
    return NextResponse.json(user);
  }
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
