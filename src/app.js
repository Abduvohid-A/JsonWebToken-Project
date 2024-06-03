import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/index.routes.js";
import { loggerMiddleware} from "./middlewares/logger.js";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use("/", router);

connectDB();