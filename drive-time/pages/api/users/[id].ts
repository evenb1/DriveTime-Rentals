import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("drivetime");

  const { id } = req.query; // Get the user ID from the request

  if (!id || !ObjectId.isValid(id as string)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  if (req.method === "PUT") {
    // Update a user
    const { name, image } = req.body;

    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(id as string) },
      { $set: { name, image } }
    );

    return res.status(200).json(result);
  } else if (req.method === "DELETE") {
    // Delete a user
    const result = await db.collection("users").deleteOne({ _id: new ObjectId(id as string) });
    return res.status(200).json(result);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
