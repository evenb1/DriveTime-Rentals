import clientPromise from "../lib/mongodb";
import cars from "../data/cars.json"; // Adjust the path if necessary

async function seedDatabase() {
  const client = await clientPromise;
  const db = client.db("DriveTime");

  try {
    // Drop the cars collection (optional, for testing purposes)
    await db.collection("cars").drop().catch(() => console.log("Collection does not exist, skipping drop."));

    // Insert data from the JSON file
    const result = await db.collection("cars").insertMany(cars);

    console.log(`Inserted ${result.insertedCount} cars successfully!`);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);
