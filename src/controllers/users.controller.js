
import {
    usersAll,
    userOne,
    userUpdate,
    userDelete
} from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
    try {
        const { ok, values, message, status } = await usersAll();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const getUser = async (req, res) => {
    try {
        const { ok, values, message, status } = await userOne();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const putUser = async (req, res) => {
    try {
        const { ok, values, message, status } = await userUpdate();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const deleteUser = async (req, res) => {
    try {
        const { ok, values, message, status } = await userDelete();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};