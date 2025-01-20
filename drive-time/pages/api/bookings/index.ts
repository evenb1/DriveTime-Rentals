import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Create a new booking
    const { user_id, car_id, start_date, end_date, status } = req.body;

    if (!user_id || !car_id || !start_date || !end_date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check for booking conflicts
    const { data: existingBookings, error: conflictError } = await supabase
      .from('bookings')
      .select('*')
      .or(
        `start_date.lte.${end_date},end_date.gte.${start_date},car_id.eq.${car_id}`
      );

    if (conflictError) {
      return res.status(500).json({ error: conflictError.message });
    }

    if (existingBookings && existingBookings.length > 0) {
      return res.status(409).json({ error: 'Car is already booked for the selected dates' });
    }

    // Insert new booking
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ user_id, car_id, start_date, end_date, status: status || 'pending' }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data);
  }

  if (req.method === 'GET') {
    // Get all bookings (or filter by user_id)
    const { user_id } = req.query;

    const query = supabase.from('bookings').select('*').order('created_at', { ascending: false });

    if (user_id) {
      query.eq('user_id', user_id);
    }

    const { data, error } = await query;

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  res.setHeader('Allow', ['POST', 'GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
