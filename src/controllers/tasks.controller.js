import {
    tasksAll,
    taskOne,
    taskUpdate,
    taskDelete,
    taskCreate
} from "../services/tasks.service.js";
import { taskValidation } from "../validation/task.validation.js";

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
        const { id } = req.params;

        const { ok, values, message, status } = await taskOne(id);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const putTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const { ok, values, message, status } = await taskUpdate(id, description);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const { ok, values, message, status } = await taskDelete(id);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};

export const createTask = async (req, res) => {
    try {
        const { okay, value, messages, statuss } = await taskValidation(req.body);

        if (!okay) return res.status(statuss).json({messages});

        const { ok, values, message, status } = await taskCreate(value);

        if (!ok) return res.status(status).json(message);
        else return res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error : error.message});
    };
};