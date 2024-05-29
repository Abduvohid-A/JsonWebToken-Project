import otpGenerator from "otp-generator";
import Task from "../models/tasks.models.js";
import { createOtp } from "../services/auth.service.js";


export const taskCreate = async (task) => {
    try {

        const params = { specialChars: false, upperCaseAlphabets: false };

        const otpGenerate = otpGenerator.generate(6, params);

        const otp = await createOtp({ email: task.email, otp: otpGenerate });

        if (!otp.ok) {
            return {
                ok: false,
                values: "",
                message: "Otp saqlanmadi",
                status: 400
            };
        };

        const task = new Task(task);

        const saveTask = await task.save();

        return {
            ok: true,
            values: { saveTask, otp: otp.saveOtp },
            message: '',
            status: 200
        };

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};
export const tasksAll = async () => {
    try {
        const allTask = await Task.find();

        if (!allTask) {
            return {
                ok: false,
                values: '',
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: allTask,
            message: '',
            status: 200
        };

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const taskOne = async (id) => {
    try {
        const task = await Task.findOne({ _id: id });

        if (!task) {
            return {
                ok: false,
                values: '',
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: task,
            message: '',
            status: 200
        };

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const taskUpdate = async (id, description) => {
    try {
        const isTask = await Task.find({ _id: id });

        if (!isTask) {
            return {
                ok: false,
                values: '',
                message: "Not Found",
                status: 404
            };
        };

        const updatedUser = await Task.findByIdAndUpdate(id, { description });

        return {
            ok: true,
            values: updatedUser,
            message: '',
            status: 200
        };

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const taskDelete = async (id) => {
    try {

        const exist = await Task.find({ _id: id });

        if (!exist) {
            return {
                ok: false,
                values: '',
                message: "Not Found",
                status: 404
            };
        };

        await Task.findByIdAndDelete(id);

        return {
            ok: true,
            values: "",
            message: 'Successfully Deleted',
            status: 200
        };

    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};