import express, { Router } from "express";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getMyPlaylists",auth, getMyPlaylists);
router.post("/createPlaylist",auth, createPlaylist);
router.delete("/deletePlaylist",auth, deletePlaylist);
router.post("/addSong/:playlist_id/:song_id", auth, getFriendSuggestions);
router.delete("/deleteSong/:playlist_id/:song_id", auth, deleteSong);

export default router;


/*
create table playlists(
    playlist_id serial primary key,
    user_id int,
    playlist_name varchar(255),
);
create table playlist_songs(
    playlist_id int,
    song_id int
);
 */