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
  if (req.method === "PUT") {
    // Update a booking
    const { status } = req.body;

    const result = await db.collection("bookings").updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { status } }
    );

    return res.status(200).json(result);
  } else if (req.method === "DELETE") {
    // Delete a booking
    const result = await db.collection("bookings").deleteOne({ _id: new ObjectId(id as string) });
    return res.status(200).json(result);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
  
}
