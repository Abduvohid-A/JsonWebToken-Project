import { Router } from "express";
import {
    getAllTasks,
    getTask,
    putTask,
    deleteTask,
    createTask
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.put("/:id", putTask);
router.delete("/:id", deleteTask);
router.post("/", createTask);

export default router;