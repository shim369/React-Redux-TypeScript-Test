import express from 'express';
import { register, login, updateProfile, getUsers } from '../controllers/userController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/profile', updateProfile);
router.get('/', getUsers);

export default router;
