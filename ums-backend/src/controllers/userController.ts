import { Request, Response } from 'express';
import pool from '../db';

export const register = (req: Request, res: Response) => {
  // ユーザー登録処理
  res.send('User registered');
};

export const login = (req: Request, res: Response) => {
  // ログイン処理
  res.send('User logged in');
};

export const updateProfile = (req: Request, res: Response) => {
  // プロフィール編集処理
  res.send('Profile updated');
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
