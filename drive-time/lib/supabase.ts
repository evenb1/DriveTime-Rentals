import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

type Booking = {
  id: string;
  user_id: string;
  car_id: string;
  car_name: string;
  start_date: string;
  end_date: string;
  status: string;
};

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string;
};

export const supabase = createClient<{
  bookings: Booking;
  users: User;
}>(supabaseUrl, supabaseKey);

/**
 * Inserts or updates a user into the `users` table when they sign in.
 * This ensures every authenticated user is stored properly.
 */
export const insertUserIntoDB = async (user: any) => {
  if (!user || !user.id) return;

  try {
    // Extract first & last name from full name
    const fullName = user.user_metadata.full_name || "";
    const [firstName, ...lastNameArr] = fullName.split(" ");
    const lastName = lastNameArr.join(" ");

    // Upsert user (Insert if new, Update if existing)
    const { error } = await supabase.from("users").upsert([
      {
        id: user.id,
        email: user.email,
        first_name: firstName || "Unknown",
        last_name: lastName || "",
        avatar_url: user.user_metadata.avatar_url || "/default-avatar.png",
      },
    ]);

    if (error) throw error;
    console.log("✅ User successfully inserted/updated in users table.");
  } catch (err) {
    console.error("❌ Error inserting/updating user in users table:", err);
  }
};

// 🔹 Listen for authentication state changes & auto-insert users into the `users` table
supabase.auth.onAuthStateChange(async (event, session) => {
  if (event === "SIGNED_IN" && session?.user) {
    await insertUserIntoDB(session.user);
  }
});
