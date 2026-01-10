import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: 'gackx_db',
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
export default pool;
