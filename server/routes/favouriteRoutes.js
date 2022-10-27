import express, { Router } from "express";
import {getFav,addtoFav} from "../controllers/favouriteController.js"
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getFav", auth, getFav);
router.post("/addtofav/:songid", auth, addtoFav);

export default router;