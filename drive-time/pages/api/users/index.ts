// import { NextApiRequest, NextApiResponse } from "next";
// import clientPromise from "@/lib/mongodb";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const client = await clientPromise;
//   const db = client.db("drivetime"); 

//   if (req.method === "POST") {
//     // Create a new user
//     const { name, email, image } = req.body;

//     if (!name || !email) {
//       return res.status(400).json({ message: "Name and email are required" });
//     }

//     const newUser = {
//       name,
//       email,
//       image: image || null,
//       createdAt: new Date(),
//     };

//     const result = await db.collection("users").insertOne(newUser);
//     return res.status(201).json(result);
//   } else if (req.method === "GET") {
//     // Fetch all users
//     const users = await db.collection("users").find({}).toArray();
//     return res.status(200).json(users);
//   } else {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
// }
