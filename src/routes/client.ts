import { Router } from 'express';
import { postClient } from '../controllers/clientsControllers';

const clientRouter = Router();

clientRouter.post('/create', postClient);

export default clientRouter;
