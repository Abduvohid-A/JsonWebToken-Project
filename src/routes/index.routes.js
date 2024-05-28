import { Router } from "express";
import authRoute from "./auth.routes.js";
// import usersRoute from "./users.routes.js";

const router = Router();

router.use("/auth", authRoute);
// router.use("/users", usersRoute);


export default router;
