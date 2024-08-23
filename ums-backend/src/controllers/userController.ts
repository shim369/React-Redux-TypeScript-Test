import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createUser, getUserByEmail, updateUser, getAllUsers, deleteUser as deleteUserFromModel, getUserById } from '../models/user';
import jwt from 'jsonwebtoken';


const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await createUser(username, hashedPassword, email);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (user && await bcrypt.compare(password, user.password)) {
      // Generate a token
      const token = jwt.sign({ id: user.id, name: user.username }, JWT_SECRET, { expiresIn: '1h' });

      res.json({
        success: true,
        token, // Include the generated token
        user: { id: user.id, name: user.username }
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const updateProfile = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { username, password, email } = req.body;

    const existingUser = await getUserById(id);
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedPassword = password ? await bcrypt.hash(password, SALT_ROUNDS) : existingUser.password;

    const updatedUser = await updateUser(id, username, hashedPassword, email);
    res.json(updatedUser);
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

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteUserFromModel(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
