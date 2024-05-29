import mongoose from "mongoose";

const { Schema, model } = mongoose;

const otpSchema = Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    otp: {
        type: String,
        length: 6,
        require: true
    }
});

export default model("otps", otpSchema);