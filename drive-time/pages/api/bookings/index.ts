import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("DriveTime");

    if (req.method === "POST") {
      const { userId, carId, startDate, endDate } = req.body;

      if (!userId || !carId || !startDate || !endDate) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }

      const start = new Date(startDate);
      const end = new Date(endDate);

      const car = await db.collection("cars").findOne({ id: carId });
      if (!car) {
        return res.status(404).json({ success: false, message: "Car not found" });
      }

      const isAvailable = car.availability.every(
        (period: { startDate: Date; endDate: Date }) =>
          start > period.endDate || end < period.startDate
      );

      if (!isAvailable) {
        return res.status(400).json({ success: false, message: "Car is not available for the selected dates" });
      }

      const newBooking = {
        userId,
        carId,
        startDate: start,
        endDate: end,
        status: "Pending",
        createdAt: new Date(),
      };

      await db.collection("bookings").insertOne(newBooking);

      await db.collection("cars").updateOne(
        { id: carId },
        {
          $setOnInsert: { availability: [] },
          $push: { availability: { startDate: start, endDate: end } },
        },
        { upsert: true }
      );

      return res.status(201).json({ success: true, message: "Booking created successfully" });
    }

    return res.status(405).json({ success: false, message: "Method not allowed" });
  } catch (error) {
    console.error("Error handling bookings:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
