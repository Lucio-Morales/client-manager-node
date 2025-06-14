import { Router } from 'express';
import { getAdminDashboard } from '../controllers/adminControllers';

const adminRouter = Router();

adminRouter.get('/dashboard', getAdminDashboard);

export default adminRouter;
