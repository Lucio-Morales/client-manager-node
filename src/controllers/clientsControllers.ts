import { Request, Response } from 'express';
import { searchClients } from '../services/clientServices';

export const findClient = async (req: Request, res: Response) => {
  const query = (req.query.query as string)?.trim();
  const trainerId = req.user?.id;

  if (!query || query.length < 2 || !trainerId) {
    res.status(400).json({ error: 'Parámetros inválidos.' });
    return;
  }

  try {
    const results = await searchClients(query, trainerId);
    res.status(200).json(results);
    return;
  } catch (error) {
    console.error('Error en searchUsers:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    return;
  }
};

export const postClient = (req: Request, res: Response) => {};
