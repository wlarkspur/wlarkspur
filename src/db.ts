import { useEffect } from "react";
import { MongoClient } from "mongodb";

let url =
  "mongodb+srv://newacon:as3333@cluster0.ey3wmxk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log((err as Error).stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// ChatGPT choice
/* export const connect = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  const closeConnection = async () => {
    try {
      await client.connect();
      console.log("MongoDB connected");
    } catch (error) {
      console.log(error);
    }
    return () => client.close();
  };
  closeConnection;
}, []); */
