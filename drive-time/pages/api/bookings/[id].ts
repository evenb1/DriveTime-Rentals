import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("DriveTime");

    const { id } = req.query;

    if (!id || !ObjectId.isValid(id as string)) {
      return res.status(400).json({ success: false, message: "Invalid booking ID" });
    }

    if (req.method === "PUT") {
      const { status } = req.body;

      const result = await db.collection("bookings").updateOne(
        { _id: new ObjectId(id as string) },
        { $set: { status } }
      );

      return res.status(200).json({ success: true, message: "Booking updated successfully", result });
    }

    if (req.method === "DELETE") {
      const { carId, startDate, endDate } = req.body;

      await db.collection("bookings").deleteOne({ _id: new ObjectId(id as string) });

      await db.collection("cars").updateOne(
        { id: carId },
        {
          $pull: {
            availability: { startDate: new Date(startDate), endDate: new Date(endDate) },
          },
        }
      );

      return res.status(200).json({ success: true, message: "Booking deleted successfully" });
    }

    return res.status(405).json({ success: false, message: "Method not allowed" });
  } catch (error) {
    console.error("Error handling bookings:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
