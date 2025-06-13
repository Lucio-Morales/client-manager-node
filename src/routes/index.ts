import { Router } from 'express';
import trainerRouter from './trainer';
import authRouter from './auth';
import clientRouter from './client';
import paymentRouter from './payment';

const mainRouter = Router();

mainRouter
  .use('/trainer', trainerRouter)
  .use('/auth', authRouter)
  .use('/client', clientRouter)
  .use('/payment', paymentRouter);

export default mainRouter;
