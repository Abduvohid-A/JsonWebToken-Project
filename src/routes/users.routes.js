import { Router } from "express";
import tasksRoute from "./tasks.routes.js";
import {
    getAllUsers,
    getUser,
    putUser,
    deleteUser
} from "../controllers/users.controller.js";

const router = Router();

router.use("/tasks", tasksRoute);

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;