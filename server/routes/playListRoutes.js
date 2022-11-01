import express, { Router } from "express";
import {
  getMyPlaylists,
  createPlaylist,
  deletePlaylist,
  addSong,
  deleteSong,
  getPlaylistSuggestions,
  getPlaylistSongs
} from "../controllers/playListControllers.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getMyPlaylists", auth, getMyPlaylists);
router.get("/getPlaylistSuggestions", auth, getPlaylistSuggestions);
router.get("/getPlaylistSongs/:playlist_id",getPlaylistSongs);
router.post("/createPlaylist", auth, createPlaylist);
router.delete("/deletePlaylist/:playlist_id", auth, deletePlaylist);
router.post("/addSong/:playlist_id/:song_id", auth, addSong);
router.delete("/deleteSong/:playlist_id/:song_id", auth, deleteSong);

export default router;

/*
create table playlists(
    playlist_id serial primary key,
    user_id int,
    playlist_name varchar(255),
    visibility varchar(1) not null default 0
);
create table playlist_songs(
    playlist_id int,
    song_id int
);
 */
