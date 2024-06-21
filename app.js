import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { DBConnect } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import taskRouter from "./routes/taskRouter.js";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/task", taskRouter);
DBConnect();
app.use(errorMiddleware);

export default app;
