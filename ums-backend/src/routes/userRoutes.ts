import express from 'express';
import { register, login, updateProfile, getUsers, getUserByIdController, deleteProfile } from '../controllers/userController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.put('/:id', updateProfile);
router.get('/', getUsers);
router.get('/:id', getUserByIdController);
router.delete('/:id', deleteProfile);

export default router;
