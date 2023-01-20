// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "./services/database.service";
import trolley from "./models/trolley";

// Global Config
export const trolleyRouter = express.Router();

trolleyRouter.use(express.json());
// GET

trolleyRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const trolley = (await collections.Trolley?.find({}).toArray()) as [];
    res.status(200).send(trolley);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
});

trolleyRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;
  try {
    const query = { _id: new ObjectId(id) };
    const game = await collections.Trolley?.findOne(query);

    if (trolley) {
      res.status(200).send(trolley);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
});

// POST
trolleyRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newTrolley = req.body;
    const result = await collections.Trolley?.insertOne(newTrolley);

    result
      ? res
          .status(201)
          .send(
            `Succesfully created a new trolley with id ${result.insertedId}`
          )
      : res.status(500).send("Failed to create a new trolley");
  } catch (error) {
    console.error(error);
    res.status(400).send((error as Error).message);
  }
});

// PUT
trolleyRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const updateTrolley: typeof trolley = req.body;
    const query = { _id: new ObjectId(id) };

    const result = await collections.Trolley?.updateOne(query, {
      $set: updateTrolley,
    });
    result
      ? res.status(200).send(`Successfully updated trolley with id ${id}`)
      : res.status(304).send(`Trolley with id ${id} not updated`);
  } catch (error) {
    console.error((error as Error).message);
    res.status(400).send((error as Error).message);
  }
});
// DELETE
trolleyRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
});
