import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("DriveTime");

  if (req.method === "POST") {
    // Create a new booking
    const { userId, carId, startDate, endDate, status } = req.body;

    if (!userId || !carId || !startDate || !endDate) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start >= end) {
      return res.status(400).json({ message: "Invalid date range" });
    }

    // Check if the car is available for the selected dates
    const car = await db.collection("cars").findOne({ id: carId });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    const isAvailable = car.availability?.every(
      (period: { startDate: Date; endDate: Date }) =>
        start > new Date(period.endDate) || end < new Date(period.startDate)
    );

    if (!isAvailable) {
      return res.status(400).json({ message: "Car is not available for the selected dates" });
    }

    const newBooking = {
      userId,
      carId,
      startDate: start,
      endDate: end,
      status: status || "Pending",
      createdAt: new Date(),
    };

    const result = await db.collection("bookings").insertOne(newBooking);

    // Update car availability
    await db.collection("cars").updateOne(
      { id: carId },
      {
        $push: {
          availability: { startDate: start, endDate: end },
        },
      }
    );

    return res.status(201).json(result);
  } else if (req.method === "GET") {
    // Fetch all bookings
    const { userId } = req.query;

    const filter = userId ? { userId } : {}; // If userId is provided, filter by user
    const bookings = await db.collection("bookings").find(filter).toArray();

    return res.status(200).json(bookings);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
