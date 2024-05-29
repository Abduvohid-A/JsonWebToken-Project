import mongoose from "mongoose";

const { Schema, model } = mongoose;

const tasksSchema = Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    perform: {
        type: Boolean,
        default: false
    }
});

export default model("tasks", tasksSchema);