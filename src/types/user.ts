export type Role = 'admin' | 'trainer' | 'client';

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
  role: Role;
}
