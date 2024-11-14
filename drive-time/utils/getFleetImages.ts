
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Path to the fleet images directory
  const fleetDirectory = path.join(process.cwd(), "public/fleet");

  // Read all files in the fleet directory
  const files = fs.readdirSync(fleetDirectory);

  // Filter only image files and map to public paths
  const images = files
    .filter((file) => /\.(png|jpe?g|svg)$/.test(file)) // Filter image files
    .map((file) => `/fleet/${file}`); // Map to public paths

  res.status(200).json(images); // Respond with image paths
}
