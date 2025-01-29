import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: "Invalid user ID." });
  }

  if (req.method === "GET") {
    try {
      const { data, error } = await supabase.from("users").select("*").eq("id", id).single();
      if (error) throw error;
      if (!data) return res.status(404).json({ error: "User not found." });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch user.", details: (err as Error).message });
    }
  } else if (req.method === "PUT") {
    const { first_name, last_name, phone, avatar_url } = req.body;
    try {
      const { error } = await supabase
        .from("users")
        .update({ first_name, last_name, phone, avatar_url })
        .eq("id", id);

      if (error) throw error;
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to update user.", details: (err as Error).message });
    }
  } else if (req.method === "DELETE") {
    try {
      const { error } = await supabase.from("users").delete().eq("id", id);
      if (error) throw error;
      res.status(204).end();
    } catch (err) {
      res.status(500).json({ error: "Failed to delete user.", details: (err as Error).message });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
