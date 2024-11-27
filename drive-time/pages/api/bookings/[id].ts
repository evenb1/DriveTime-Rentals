import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("DriveTime");

  const { id } = req.query;

  if (!id || !ObjectId.isValid(id as string)) {
    return res.status(400).json({ message: "Invalid booking ID" });
  }

  
}
