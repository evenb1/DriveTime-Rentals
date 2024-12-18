import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!; // Use the connection string from .env.local

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Prevent TypeScript from complaining about the global variable
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// In development, reuse the MongoClient instance to prevent multiple connections
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
