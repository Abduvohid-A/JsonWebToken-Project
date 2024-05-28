import Otp from "../models/otp.models.js";
import User from "../models/users.models.js";
import jwt from "jsonwebtoken";

export const giveToken = async (user) => {
    try {
        const isUser = await User.findOne({email : user.email});

        if (isUser) {
            return {
                ok : false,
                values : '',
                message : "Avval ro'yhatdan o'ting ",
                status : 404
            };
        };

        const token = jwt.sign({ sub : isUser.email}, process.env.JWT_KEY);

        return {
            ok : true,
            values : token,
            message : '',
            status : 200
        };

    } catch (error) {
        console.log(error);

        return {
            ok : false,
            values : "",
            message : error.message,
            status : 500
        };
    };
};


export const createUser = async (newUser) => {
    try {
        const user = new User(newUser);

        const saveUser = await user.save();

        return {
            ok : true,
            values : saveUser,
            message : '',
            status : 201
        };

    } catch (error) {
        console.log(error);

        return {
            ok : false,
            values : "",
            message : error.message,
            status : 500
        };
    };
};

export const CheckOtp = async (newUser) => {
    try {
        const user = new User(newUser);

        const saveUser = await user.save();

        return {
            ok : true,
            values : saveUser,
            message : '',
            status : 201
        };

    } catch (error) {
        console.log(error);

        return {
            ok : false,
            values : "",
            message : error.message,
            status : 500
        };
    };
};

