import { Request, Response } from 'express';

export function getAdminDashboard(req: Request, res: Response) {
  const adminId = req.user?.id;

  res.json({ message: 'Binenvenido al dashboard del admin', adminId, timestamp: new Date().toISOString() });
}
