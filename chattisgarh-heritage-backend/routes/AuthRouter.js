import express from "express";
const router = express.Router();
import { signup, login } from "../controllers/AuthController.js";
import { signupValidation, loginValidation } from "../middleware/AuthValidation.js";

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

export default router;
