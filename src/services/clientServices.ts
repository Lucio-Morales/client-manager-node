import { supabase } from '../db/supabase';
import { CreateClientInput } from '../types/client';

export const createClient = async ({ name, dni, email, phone, trainer_id }: CreateClientInput) => {
  const { data, error } = await supabase.from('clients').insert([{ name, dni, email, phone, trainer_id }]);
};
