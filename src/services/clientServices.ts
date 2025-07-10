import { supabase } from '../db/supabase';

type Client = {
  id: string;
  name: string;
  email: string;
  dni: string;
};

export const searchClients = async (query: string, trainerId: string): Promise<Client[]> => {
  if (!query || query.length < 2) return [];

  // Buscar IDs de clientes existentes o invitados
  const [clientsRes, invitesRes] = await Promise.all([
    supabase.from('trainer_clients').select('client_id').eq('trainer_id', trainerId),
    supabase.from('invitations').select('client_id').eq('trainer_id', trainerId).eq('status', 'pending'),
  ]);

  if (clientsRes.error || invitesRes.error) {
    throw new Error('Error al obtener relaciones actuales del entrenador.');
  }

  const excludedIds = new Set<string>();
  clientsRes.data?.forEach((c) => excludedIds.add(c.client_id));
  invitesRes.data?.forEach((i) => excludedIds.add(i.client_id));

  // Buscar clientes por name, email o DNI

  const { data, error } = await supabase
    .from('user')
    .select('id, name, email, dni')
    .eq('role', 'client')
    .or([`name.ilike.%${query}%`, `email.ilike.%${query}%`, `dni.ilike.%${query}%`].join(','))
    .limit(10);
  if (error) throw new Error('Error al buscar clientes.');

  const filtered = (data || []).filter((c) => !excludedIds.has(c.id));
  return filtered;
};
