import connectToDatabase from "../database.js";
import { body, validationResult } from 'express-validator';

export default async function addUser ({ name, email, password, country, state }) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("Users");
    const lastUser  = await collection.find().sort({ id: -1 }).limit(1).toArray();
    const userId = lastUser .length > 0 ? lastUser [0].id + 1 : 1;

    const newUser  = {
      id: userId,
      name,
      email,
      password, 
      country,
      state,
      createdAt: new Date(),
      updatedAt: new Date(), 
      isActive: true,
    };

    const result = await collection.insertOne(newUser);
     
  } catch {
    console.log("there is an probelm in adding user");
  }
}