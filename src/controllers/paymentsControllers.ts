import { Request, Response } from 'express';

export const registerPayment = (req: Request, res: Response) => {
  res.json({ message: 'Registrar un pago de un cliente.' });
};

export const getClientPayments = (req: Request, res: Response) => {
  res.json({ message: 'Obtener todos los registros de pagos de un cliente.' });
};
