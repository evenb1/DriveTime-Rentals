import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!; // Ensure MONGODB_URI is set in your environment variables

const testConnection = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    console.log("Connected to MongoDB successfully!");

    const databases = await client.db().admin().listDatabases();
    console.log("Databases:");
    databases.databases.forEach((db) => console.log(` - ${db.name}`));

    await client.close(); // Close the connection
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

testConnection();
