import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { Schema, model } = mongoose;

const usersSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

usersSchema.pre('save', async function (next) {
    try {
        const saltRounds = parseInt(process.env.PASSWORD_SALT);
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        next();

    } catch (error) {

        next(error);
    }
});

export default model("users", usersSchema);