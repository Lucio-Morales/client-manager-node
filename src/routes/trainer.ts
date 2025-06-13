import { Router } from 'express';
import { createUser, getUsers } from '../controllers/usersControllers';

const trainerRouter = Router();

trainerRouter.get('/', getUsers).post('/', createUser);

export default trainerRouter;
