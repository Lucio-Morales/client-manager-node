import { Router } from 'express';
import { createClient, getClients } from '../controllers/clientsControllers';

const clientRouter = Router();

clientRouter.post('/create', createClient).get('/get_clients', getClients);

export default clientRouter;
