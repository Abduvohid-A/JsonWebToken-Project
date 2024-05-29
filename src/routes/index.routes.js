import { Router } from "express";
import authRoute from "./auth.routes.js";
import usersRoute from "./users.routes.js";
import { checkToken } from "../middlewares/check.token.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/users", checkToken, usersRoute);


export default router;
