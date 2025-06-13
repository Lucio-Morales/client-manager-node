import { supabase } from '../db/supabase';

export async function registerUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getUserFromToken(token: string) {
  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) throw new Error('Token inválido o expirado.');

  return data.user;
}
