import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/authControllers';

const authRouter = Router();

authRouter.post('/register', registerUser).post('/login', loginUser);

export default authRouter;
