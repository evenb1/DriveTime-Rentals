import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || '';
if (!uri) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

try {
  client = new MongoClient(uri);
  clientPromise = client.connect();
  console.log("MongoDB connected successfully"); // Success message
} catch (error) {
  console.error("MongoDB connection error:", error);
  throw new Error("Failed to connect to MongoDB");
}

export default clientPromise;
