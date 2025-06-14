declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: 'admin' | 'trainer' | 'client';
        [key: string]: any;
      };
    }
  }
}

export {};
