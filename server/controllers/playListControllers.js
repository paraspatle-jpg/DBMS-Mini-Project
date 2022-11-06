import pool from "./../index.js";

export const getMyPlaylists = async (req, res) => {
  try {
    const values = [req.user.user_id];
    const rows = await pool.query(
      "select * from playlists where user_id=$1",
      values
    );
    console.log(rows.rows);
    res.status(200).send({ playlists: rows.rows, message: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to get Playlists" });
  }
};

export const getPlaylistSuggestions = async (req, res) => {
  try {
    const values = [req.user.user_id];
    const rows = await pool.query(
      "select * from playlists where user_id<>$1 and visibility='1'",
      values
    );
    console.log(rows.rows);
    res.status(200).send({ playlists: rows.rows, message: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to get Playlists" });
  }
};

export const getPlaylistSongs = async (req, res) => {
  try {
    const { playlist_id } = req.params;
    const values = [parseInt(playlist_id)];
    console.log(values)
    const row = await pool.query(
      "select * from song s,playlist_songs p where s.song_id = p.song_id and p.playlist_id = $1",
      values
    );
    console.log(row.rows);
    return res
      .status(200)
      .send({ songs: row.rows, message: "Playlist fetched successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed" });
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
    const values1 = [req.user.user_id];
    const rows = await pool.query(
      "select * from playlists where user_id=$1",
      values1
    );
    console.log(rows.rows);
    res
      .status(200)
      .send({ playlists: rows.rows, message: "Playlist Created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Playlist not created" });
  }
};
export const deletePlaylist = async (req, res) => {
  const values = [req.params.playlist_id];
};

export const addSong = async (req, res) => {
  try {
    const song = req.body.body;
    const values1 = [parseInt(req.params.song_id)];
    const values5 = [
      song.key,
      song.title,
      song.subtitle,
      song.images !== undefined ? song.images.coverart : "",
      song.url,
    ];
    console.log(values1);
    var exist = await pool.query(
      "select * from song where song_id=$1",
      values1
    );
    if (exist.rowCount === 0) {
      await pool.query("insert into song values($1,$2,$3,$4,$5)", values5);
    }
    const { playlist_id, song_id } = req.params;
    const values = [parseInt(playlist_id), parseInt(song_id)];

    exist = await pool.query(
      "select * from playlist_songs where playlist_id=$1 and song_id=$2 ",
      values
    );
    if (exist.rowCount !== 0) {
      console.log("hehe")
      return res.status(200).send({ message: "Song already exists!!" });
    }

    pool.query("insert into playlist_songs values($1,$2)", values);
    console.log("success");
    res.status(200).send({ message: "Song added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Song adding Failed" });
  }
};
export const deleteSong = async (req, res) => {};
