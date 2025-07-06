import { Request, Response } from 'express';

export const getClients = (req: Request, res: Response) => {
  // lógica para traer usuarios
  res.json({ message: 'Listado de clientes' });
};

export const postClient = (req: Request, res: Response) => {};
