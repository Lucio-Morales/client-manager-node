import { Request, Response } from 'express';

export const getClients = (req: Request, res: Response) => {
  // lógica para traer usuarios
  res.json({ message: 'Listado de clientes' });
};

export const createClient = (req: Request, res: Response) => {
  // lógica para crear usuario
  res.json({ message: 'Cliente creado' });
};
