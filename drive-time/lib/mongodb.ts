import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!; // Use the connection string from .env.local
let client: MongoClient;
let clientPromise: Promise<MongoClient>;
declare global {
  // Prevent TypeScript from complaining about the global variable
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

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
try {
  client = new MongoClient(uri);
  clientPromise = client.connect();
} catch (error) {
  console.error("MongoDB connection failed:", error);
  throw new Error("Failed to connect to MongoDB");
}


export default clientPromise;
