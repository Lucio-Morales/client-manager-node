import { Router } from 'express';
import trainerRouter from './trainer';
import authRouter from './auth';
import clientRouter from './client';
import paymentRouter from './payment';
import adminRouter from './admin';
import { authenticate } from '../middlewares/authenticate';
import { authorize } from '../middlewares/authorize';

const mainRouter = Router();

mainRouter
  .use('/auth', authRouter)
  .use('/admin', authenticate, authorize(['admin']), adminRouter)
  .use('/trainer', authenticate, authorize(['trainer']), trainerRouter)
  .use('/client', authenticate, authorize(['trainer', 'client']), clientRouter)
  .use('/payment', authenticate, paymentRouter);

export default mainRouter;
