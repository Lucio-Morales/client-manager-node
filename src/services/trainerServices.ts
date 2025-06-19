import { supabase } from '../db/supabase';

export async function fetchTrainerProfile(userId: string) {
  const { data, error } = await supabase
    .from('trainers_profile')
    .select(
      `
    *,
    user:user (
    name,
    email
    )
    `
    )
    .eq('id', userId)
    .maybeSingle();

  if (error) {
    console.log('Erorr fetching trainer profile:', error);
    throw new Error(error.message);
  }

  return data;
}
