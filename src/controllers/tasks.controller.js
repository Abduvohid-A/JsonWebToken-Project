import {
    tasksAll,
    taskOne,
    taskUpdate,
    taskDelete,
    taskCreate
} from "../services/tasks.service.js";

export const getAllTasks = async (req, res) => {
    try {
        const { ok, values, message, status } = await tasksAll();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const getTask = async (req, res) => {
    try {
        const { ok, values, message, status } = await taskOne();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const putTask = async (req, res) => {
    try {
        const { ok, values, message, status } = await taskUpdate();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const deleteTask = async (req, res) => {
    try {
        const { ok, values, message, status } = await taskDelete();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const createTask = async (req, res) => {
    try {
        const { ok, values, message, status } = await taskCreate();

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};