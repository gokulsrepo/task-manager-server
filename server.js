import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import taskRouter from "./routes/taskRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/v1/task", taskRouter);

//Middleware
app.use(errorMiddleware);

// Connect to MongoDB
const URI = process.env.MONGODB_URL
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

// Listen Server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})
