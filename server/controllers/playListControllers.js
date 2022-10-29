import pool from "./../index.js";

export const getMyPlaylists = async (req, res) => {
  try {
    const values = [req.user.user_id];
    const rows = await pool.query(
      "select * from playlists where user_id=$1",
      values
    );
    console.log(rows.rows);
    res.status(200).send({ favourites: rows.rows, message: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to get Playlists" });
  }
};
export const createPlaylist = async (req, res) => {
  try {
    const { playlist_name, visibility } = req.body;
    console.log(req.body);
    const values = [req.user.user_id, playlist_name, visibility];
    await pool.query(
      "insert into playlists(user_id,playlist_name,visibility) values($1,$2,$3)",
      values
    );
    res.status(200).send({ message: "Playlist Created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Playlist not created" });
  }
};
export const deletePlaylist = async (req, res) => {
    const values = [req.params.playlist_id];
    
};
export const addSong = async (req, res) => {};
export const deleteSong = async (req, res) => {};
