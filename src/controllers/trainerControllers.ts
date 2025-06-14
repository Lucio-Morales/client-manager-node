import { Request, Response } from 'express';

export function getTrainerDashboard(req: Request, res: Response) {
  const trainerId = req.user?.id;

  res.json({ message: 'Binenvenido al dashboard del trainer', trainerId, timestamp: new Date().toISOString() });
}
