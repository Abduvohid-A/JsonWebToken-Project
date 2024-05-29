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

        res.status(500).json({ error: error.message });
    };
};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const { ok, values, message, status } = await userOne(id);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error.message });
    };
};

export const putUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const { ok, values, message, status } = await userUpdate(id, name);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error.message });
    };
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const { ok, values, message, status } = await userDelete(id);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(message);

    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error.message });
    };
};