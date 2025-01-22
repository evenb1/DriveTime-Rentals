import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { user_id, car_id, start_date, end_date, status } = req.body;

    // Validate required fields
    if (!user_id || !car_id || !start_date || !end_date || !status) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Validate UUID for user_id
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(user_id)) {
      return res.status(400).json({ error: "Invalid user_id format. It must be a UUID." });
    }

    try {
      const { data, error } = await supabase
        .from("bookings")
        .insert([{ user_id, car_id, start_date, end_date, status }]);

      if (error) {
        console.error("Error inserting booking:", error);
        return res
          .status(500)
          .json({ error: "Failed to create booking.", details: error.message });
      }

      return res.status(201).json({ success: true, data });
    } catch (err) {
      console.error("Unexpected error inserting booking:", err);
      return res
        .status(500)
        .json({ error: "Failed to create booking.", details: (err as Error).message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
