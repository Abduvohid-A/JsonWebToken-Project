import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MONGO DB connected on host : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
    };
};