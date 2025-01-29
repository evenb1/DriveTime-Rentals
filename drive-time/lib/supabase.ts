import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

type Booking = {
  id: string;
  user_id: string;
  car_id: string;
  car_name: string;
  start_date: string;
  end_date: string;
  status: string;
};

export const supabase = createClient<{
  bookings: Booking;
}>(supabaseUrl, supabaseKey);
