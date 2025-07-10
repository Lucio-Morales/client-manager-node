import { Router } from 'express';
import { findClient } from '../controllers/clientsControllers';

const clientRouter = Router();

clientRouter.get('/search', findClient);

export default clientRouter;
