import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!; // Use the connection string from .env.local
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// In development, use a global variable to ensure the MongoClient is reused
if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production, create a new MongoClient
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
