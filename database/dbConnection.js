import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const DBConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "task_manager",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! : ${err}`);
    });
};