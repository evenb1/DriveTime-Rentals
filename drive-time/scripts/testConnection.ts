import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI || '';
if (!uri) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}
const client = new MongoClient(uri);

(async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    const dbList = await client.db().admin().listDatabases();
    console.log("Databases:", dbList);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
})();
