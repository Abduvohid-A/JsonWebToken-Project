import { Router } from "express";
import { 
    registerController,
    loginController,
    otpController
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/otp", otpController);

export default router;