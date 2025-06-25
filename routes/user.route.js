import express from 'express';
import { getUser, createUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getUser);
router.get('/create', createUser);
router.get('/delete', deleteUser);

export default router;