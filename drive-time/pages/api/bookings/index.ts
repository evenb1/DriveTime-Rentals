import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { user_id, car_id, start_date, end_date, status } = req.body;

    try {
      const { data, error } = await supabase.from("bookings").insert([
        {
          user_id,
          car_id,
          start_date,
          end_date,
          status: status || "pending",
        },
      ]);

      if (error) throw error;

      res.status(201).json({ success: true, data });
    } catch (error: unknown) {
      console.error("Error creating booking:", error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  } else if (req.method === "GET") {
    try {
      const { data, error } = await supabase.from("bookings").select("*");

      if (error) throw error;

      res.status(200).json({ success: true, data });
    } catch (error: unknown) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
