import { Pool } from 'pg';

const pool = new Pool({
  user: 'shim',
  host: 'localhost',
  database: 'mydatabase',
  password: 'shim',
  // password: '',
  port: 5432,
});

export default pool;
