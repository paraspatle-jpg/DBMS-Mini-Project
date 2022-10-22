import express, { Router } from "express";
import { getFriends, addFriend, getFriendSuggestions } from "../controllers/friendControllers.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getFriends",auth, getFriends);
router.post("/addFriend",auth, addFriend);
router.get("/getFriendSuggestions", auth, getFriendSuggestions);

export default router;
