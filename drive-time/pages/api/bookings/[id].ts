import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Booking ID is required' });
  }

  if (req.method === 'PUT') {
    // Update a booking
    const { status, start_date, end_date } = req.body;

    const { data, error } = await supabase
      .from('bookings')
      .update({ status, start_date, end_date })
      .eq('id', id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  if (req.method === 'DELETE') {
    // Delete a booking
    const { data, error } = await supabase.from('bookings').delete().eq('id', id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Booking deleted successfully', data });
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
