import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}

const testConnection = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    console.log("Connected to MongoDB successfully!");

    const databases = await client.db().admin().listDatabases();
    console.log("Databases:");
    databases.databases.forEach((db: { name: string }) => {
      console.log(` - ${db.name}`);
    });

    await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

testConnection();
