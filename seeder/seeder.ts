import Builder from "../backend/models/builder";
import mongoose from "mongoose";
import { builders } from "./data";

require("dotenv").config();

const seederBuilders = async () => {
  try {
    if (process.env.DB_LOCAL_URI) {
      await mongoose.connect(process.env.DB_LOCAL_URI);
    } else {
      throw new Error("DB_LOCAL_URI is not defined");
    }

    await Builder.deleteMany();
    console.log("Builders are deleted");

    await Builder.insertMany(builders);
    console.log("All Builders are added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seederBuilders();
