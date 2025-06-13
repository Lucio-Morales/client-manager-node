import { Request, Response } from 'express';
import { register, login } from '../services/authServices';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: 'Email y contraseña son requeridos.' });
    return;
  }

  try {
    const registerData = await register(email, password);
    res.status(201).json(registerData);
    return;
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    return;
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email y contraseña son requeridos.' });
    return;
  }

  try {
    const result = await login(email, password);
    res.status(200).json(result); // incluirá token, user, etc.
    return;
  } catch (error: any) {
    res.status(401).json({ message: error.message });
    return;
  }
};
