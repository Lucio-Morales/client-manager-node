import { Router } from 'express';
import { registerPayment } from '../controllers/paymentsControllers';

const paymentRouter = Router();

paymentRouter.post('/', registerPayment);

export default paymentRouter;
