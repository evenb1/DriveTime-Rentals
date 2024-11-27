import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("DriveTime");

  if (req.method === "POST") {
    // Create a new booking
    const { userId, carName, startDate, endDate, status } = req.body;

    if (!userId || !carName || !startDate || !endDate) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newBooking = {
      userId,
      carName,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      status: status || "Pending",
      createdAt: new Date(),
    };

    const result = await db.collection("bookings").insertOne(newBooking);
    return res.status(201).json(result);
  } else if (req.method === "GET") {
    // Fetch all bookings
    const bookings = await db.collection("bookings").find({}).toArray();
    return res.status(200).json(bookings);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
