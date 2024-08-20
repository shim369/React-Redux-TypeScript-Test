import { Request, Response } from 'express';
import { createUser, updateUser, getAllUsers } from '../models/user';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const newUser = await createUser(username, password);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = (req: Request, res: Response) => {
  res.send('User logged in');
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id, username, password } = req.body;
    const updatedUser = await updateUser(id, username, password);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
