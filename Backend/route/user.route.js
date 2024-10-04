import express from "express";
import { signup, login } from "../controller/user.controller.js";  // Corrected path
const router = express.Router();  // Corrected 'Router'

router.post("/signup", signup);
router.post("/login", login);

export default router;
