import pool from '../db';

export interface User {
  id: number;
  username: string;
  password: string;
}

export const getAllUsers = async (): Promise<User[]> => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

export const createUser = async (username: string, password: string): Promise<User> => {
  const result = await pool.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, password]
  );
  return result.rows[0];
};

export const getUserById = async (id: number): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const updateUser = async (id: number, username: string, password: string): Promise<User | null> => {
  const result = await pool.query(
    'UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *',
    [username, password, id]
  );
  return result.rows[0] || null;
};

export const deleteUser = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
};
