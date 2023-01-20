import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { Trolley?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING || ""
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const trolleyCollection: mongoDB.Collection = db.collection(
    process.env.TROLLEY_LIST || ""
  );

  collections.Trolley = trolleyCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${trolleyCollection.collectionName}`
  );
}
