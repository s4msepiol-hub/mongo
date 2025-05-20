const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://mongo:27017/git-logs'; // Your provided connection string
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        const database = client.db('git-logs'); // Database name
        //const collection = database.collection('your_collection_name'); // Replace with your collection name

        // Read data from the collection
        const query = {}; // You can specify a query here if needed
        const results = await collection.find(query).toArray();

        console.log('Retrieved data:', results);
    } catch (error) {
        console.error('Error reading data:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

run().catch(console.dir);
