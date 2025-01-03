import clientPromise from "@/lib/mongodb";

export default async function handler(req: any, res: any) {
  try {
    const client = await clientPromise;
    const db = client.db("your_database_name");
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    if (error instanceof Error) {
      console.error("MongoDB connection failed:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
  
}
