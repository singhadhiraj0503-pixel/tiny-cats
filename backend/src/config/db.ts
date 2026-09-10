import mongoose from "mongoose";
import { config } from "./config.js";

export const connectToDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to the Databse!!.");
  } catch (error) {
    console.log("Error in conneting to the Database", error);
  }
};
