import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data, error } = await supabase.from("bookings").select("*").limit(1);

    if (error) {
      // Handle PostgrestError explicitly
      console.error("Supabase Error:", error.message);
      return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    // Handle unknown errors gracefully
    if (err instanceof Error) {
      console.error("Unexpected Error:", err.message);
      return res.status(500).json({ success: false, error: err.message });
    } else {
      console.error("Unknown Error:", err);
      return res.status(500).json({ success: false, error: "Unknown error occurred" });
    }
  }
}
