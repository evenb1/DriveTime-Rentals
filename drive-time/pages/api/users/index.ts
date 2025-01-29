import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.setHeader("Allow", ["GET"]).status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    const { data, error } = await supabase.from("users").select("id, first_name, last_name, email, phone, avatar_url");
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users.", details: (err as Error).message });
  }
}
