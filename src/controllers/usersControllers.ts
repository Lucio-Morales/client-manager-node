import { Request, Response } from 'express';
import { getAllUsers } from '../services/userServices';

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

export const createUser = (req: Request, res: Response) => {
  // lógica para crear usuario
  res.json({ message: 'Usuario creado' });
};
