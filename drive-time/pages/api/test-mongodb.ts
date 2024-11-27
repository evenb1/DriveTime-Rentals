import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("DriveTime"); // Replace with your database name
    const collections = await db.listCollections().toArray();

    res.status(200).json({ message: "Connected to MongoDB!", collections });
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to MongoDB", error });
  }
}
