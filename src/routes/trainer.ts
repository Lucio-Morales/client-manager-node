import { Router } from 'express';
import { getTrainerProfile } from '../controllers/trainerControllers';

const trainerRouter = Router();

trainerRouter.get('/profile', getTrainerProfile);

export default trainerRouter;
