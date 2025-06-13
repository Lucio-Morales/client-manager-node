import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authServices';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email y contraseña son requeridos.' });
    return;
  }

  try {
    const registerData = await registerUser(email, password);
    res.status(201).json(registerData);
    return;
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    return;
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email y contraseña son requeridos.' });
    return;
  }

  try {
    const result = await loginUser(email, password);
    res.status(200).json(result); // incluirá token, user, etc.
    return;
  } catch (error: any) {
    res.status(401).json({ message: error.message });
    return;
  }
};
