import { query } from './db';
import bcrypt from 'bcryptjs';

export async function signUp(email: string, password: string, fullName: string) {
  const passwordHash = await bcrypt.hash(password, 10);
  const res = await query(
    'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name',
    [email, passwordHash, fullName]
  );
  return res.rows[0];
}

export async function login(email: string, password: string) {
  const res = await query('SELECT * FROM users WHERE email = $1', [email]);
  const user = res.rows[0];
  if (user && await bcrypt.compare(password, user.password_hash)) {
    const { password_hash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
}
