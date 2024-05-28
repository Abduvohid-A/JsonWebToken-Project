import bcrypt from "bcrypt";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const usersSchema = Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        unique :true,
        require : true
    },
    password : {
        type : String,
        require : true
    }
});

usersSchema.pre('save', async function(next) {
    const hashedPassword = await bcrypt.hash(this.password, process.env.PASSWORD_SALT);
    this.password = hashedPassword;
    next();
});

export default model("users", usersSchema);