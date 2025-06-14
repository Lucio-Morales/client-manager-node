import { Router } from 'express';
import { getTrainerDashboard } from '../controllers/trainerControllers';

const trainerRouter = Router();

trainerRouter.get('/dashboard', getTrainerDashboard);

export default trainerRouter;
