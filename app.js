const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const fs = require('fs');

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
  if (err) throw err;
  console.log("Connected to MongoDB");

  const db = client.db("nodemongo");
  const collection = db.collection("customers");

  // Drop the collection if it exists for a clean start (optional)
  // await collection.drop().catch(() => {}); // Uncomment if needed

  // Step 1: Create collection
  // await db.createCollection("customers");
  // console.log("Collection created!");

  // Step 2: Insert a single record
  // await collection.insertOne({ name: "Westcliff", address: "Inc" });
  // console.log("1 document inserted");

  // Step 3: Insert multiple records
  // const data = [
  { name: 'John', address: 'Highway 71'},
  { name: 'Peter', address: 'Lowstreet 4'},
  { name: 'Amy', address: 'Apple st 652'},
  { name: 'Hannah', address: 'Mountain 21'},
  { name: 'Michael', address: 'Valley 345'},
  { name: 'Sandy', address: 'Ocean blvd 2'},
  { name: 'Betty', address: 'Green Grass 1'},
  { name: 'Richard', address: 'Sky st 331'},
  { name: 'Susan', address: 'One way 98'},
  { name: 'Vicky', address: 'Yellow Garden 2'},
  { name: 'Ben', address: 'Park Lane 38'},
  { name: 'William', address: 'Central st 954'},
  { name: 'Chuck', address: 'Main Road 989'},
  { name: 'Viola', address: 'Sideway 1633'}
  // ];
  // await collection.insertMany(data);
  // console.log("Number of documents inserted: " + data.length);

  // Step 4: Find one document
  // const result = await collection.findOne({});
  // console.log(result.name + " " + result.address);

  // Step 5: Query object filter
  // const query = { address: /^S/ };
  // const filtered = await collection.find(query).toArray();
  // console.log(filtered);

  // Step 6: Sort documents by name
  // const sorted = await collection.find().sort({ name: 1 }).toArray();
  // console.log(sorted);

  // Step 7: Delete one document
  // await collection.deleteOne({ address: "Mountain 21" });
  // console.log("1 document deleted");

  // Step 8: Update one document
  // await collection.updateOne({ address: "Valley 345" }, { $set: { name: "Michael Updated" } });
  // console.log("1 document updated");

  client.close();
});
