const { MongoClient } = require("mongodb");

// Replace with your connection string
const uri = "mongodb+srv://evenberhane2018:Evpreen12@drivetime.epcvs.mongodb.net/?retryWrites=true&w=majority&appName=DriveTime";

async function testConnection() {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to the client
    await client.connect();

    console.log("Connected to MongoDB Atlas successfully!");

    // List databases
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:");
    databases.databases.forEach((db) => console.log(` - ${db.name}`));

    // Close the connection
    await client.close();
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
  }
}

testConnection();
