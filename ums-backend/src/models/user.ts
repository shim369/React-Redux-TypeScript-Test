import pool from '../db';

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
}

export const getAllUsers = async (): Promise<User[]> => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0] || null;
};

export const createUser = async (username: string, password: string, email: string): Promise<User> => {
  const result = await pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, password]
  );
  return result.rows[0];
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const updateUser = async (id: number, username: string, password: string, email: string): Promise<User | null> => {
  const result = await pool.query(
    'UPDATE users SET username = $1, password = $2, email = $3 WHERE id = $4 RETURNING *',
    [username, password, email, id]
  );
  return result.rows[0] || null;
};

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
};
