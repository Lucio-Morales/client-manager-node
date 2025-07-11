import { Request, Response } from 'express';
import { register, login } from '../services/authServices';

// REGISTER
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    return;
  }

  try {
    const newUser = await register({ name, email, password, role });
    res.status(201).json({ success: true, message: 'Usuario registrado y perfil creado con exito.', user: newUser });
    return;
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// LOGIN
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
