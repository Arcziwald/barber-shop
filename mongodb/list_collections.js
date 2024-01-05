const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

async function processDB() {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url, { monitorCommands: true });

  try {
    await client.connect();
    const db = client.db("reservation");
    const collection = db.collection("customer");

    await collection.insertOne({ name: "Asia", surname: "Kowalska" });
    const customer = [{ name: "Ola" }];
    const options = { ordered: true }; //jeśli jeden element się nie zapisze to reszta też się nie zapisze

    const result = await collection.insertMany(customer, options);
    console.log(`${result.insertedCount} customer were saved`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

processDB();
