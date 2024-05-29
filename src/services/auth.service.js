import Otp from "../models/otp.models.js";
import User from "../models/users.models.js";
import jwt from "jsonwebtoken";

export const createUser = async (user) => {
    try {
        const newUser = new User(user);

        const saveUser = await newUser.save();

        return {
            ok: true,
            values: saveUser,
            message: '',
            status: 201
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

export const giveToken = async (user) => {
    try {
        const isUser = await User.findOne({ email: user.email });

        if (!isUser) {
            return {
                ok: false,
                values: '',
                message: "Avval ro'yhatdan o'ting ",
                status: 404
            };
        };

        const token = jwt.sign({ sub: isUser.email }, process.env.JWT_KEY,
            { expiresIn: process.env.JWT_ACCESS_TIME });

        return {
            ok: true,
            values: token,
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


export const createOtp = async (otp) => {
    try {
        const newOtp = new Otp(otp);

        const saveOtp = await newOtp.save();

        return {
            ok: true,
            values: saveOtp,
            message: '',
            status: 201
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

export const CheckOtp = async (checkOtp) => {
    try {
        const existOtp = await Otp.findOne({ email: checkOtp.email });

        if (!existOtp) {

            return {
                ok: false,
                values: "",
                message: 'Otp not Found',
                status: 404
            };
        };

        await Otp.findByIdAndDlete(existOtp._id);

        return {
            ok: true,
            values: saveUser,
            message: '',
            status: 201
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

