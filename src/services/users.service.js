import User from "../models/users.models.js";


export const usersAll = async (user) => {
    try {
        const allUser = await User.find();

        if (!allUser) {
            return {
                ok: false,
                values: '',
                message: "Avval ro'yhatdan o'ting ",
                status: 404
            };
        };

        return {
            ok: true,
            values: allUser,
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

export const userOne = async (id) => {
    try {
        const user = await User.findOne({ _id : id });

        if (!user) {
            return {
                ok: false,
                values: '',
                message: "User not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: user,
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

export const userUpdate = async (id, name) => {
    try {
        const isUser = await User.find({ _id : id });

        if (!isUser) {
            return {
                ok: false,
                values: '',
                message: "Not Found",
                status: 404
            };
        };

        const updatedUser = await User.findByIdAndUpdate(id, { name });

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

export const userDelete = async (id) => {
    try {

        const isUser = await User.find({ _id : id });

        if (!isUser) {
            return {
                ok: false,
                values: '',
                message: "Not Found",
                status: 404
            };
        };

        await User.findByIdAndDelete(id);

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