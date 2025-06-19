import { Request, Response } from 'express';
import { fetchTrainerProfile } from '../services/trainerServices';

export async function getTrainerProfile(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ success: false, message: 'Usuario no autenticado.' });
      return;
    }
    const profile = await fetchTrainerProfile(userId!);
    if (!profile) {
      res.status(404).json({ message: 'Perfil no encontrado' });
      return;
    }

    res.status(200).json({ success: true, message: 'Perfil obtenido.', profile });
  } catch (error) {
    console.error('Error en getTrainerProfile:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
}
