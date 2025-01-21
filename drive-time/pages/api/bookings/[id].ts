import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: 'Invalid booking ID.' });
  }

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('id', id);

      if (error) throw error;

      if (!data || data.length === 0) {
        return res.status(404).json({ error: 'Booking not found.' });
      }

      res.status(200).json({ success: true, data: data[0] });
    } catch (err) {
      console.error('Error fetching booking:', err);
      res.status(500).json({ error: 'Failed to fetch booking.' });
    }
  } else if (req.method === 'PUT') {
    const { start_date, end_date, status } = req.body;

    try {
      const { data, error } = await supabase
        .from('bookings')
        .update({ start_date, end_date, status })
        .eq('id', id);

      if (error) throw error;

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error('Error updating booking:', err);
      res.status(500).json({ error: 'Failed to update booking.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { error } = await supabase.from('bookings').delete().eq('id', id);

      if (error) throw error;

      res.status(204).end(); // No content on successful delete
    } catch (err) {
      console.error('Error deleting booking:', err);
      res.status(500).json({ error: 'Failed to delete booking.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
