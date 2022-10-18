import express, { Router } from "express";
import { login, signup, getUser } from "../controllers/authControllers.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/getUser", auth, getUser);

export default router;
