import pool from "./../index.js";

export const addtoFav = async (req, res) => {
  try {
    const { songid } = req.params;
    const song = req.body.body;
    const values1 = [song.key]
    const values5 = [song.key,song.title,song.subtitle,song.images.coverart,song.url]
    const values = [req.user.user_id, songid];
    const exist = await pool.query("select * from song where song_id=$1",values1);
    console.log(exist.rowCount);
    if(exist.rowCount===0){
        await pool.query("insert into song values($1,$2,$3,$4,$5)",values5)
    }
    await pool.query(
        "insert into favourites values($1,$2)",
      values
    );
    const values2 = [req.user.user_id];
    const rows = await pool.query(
      "select * from song where song_id in (select song_id from favourites where user_id = $1)",
      values2
    );
    console.log(rows.rows);
    res.status(200).send({ favourites: rows.rows, message: "Success" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message})
  }
};
export const getFav = async (req, res) => {
  try {
    const values = [req.user.user_id];
    const rows = await pool.query(
      "select * from song where song_id in (select song_id from favourites where user_id = $1)",
      values
    );
    console.log(rows.rows);
    res.status(200).send({ favourites: rows.rows, message: "Success" });
  } catch (err) {
    res.status(500).send({ message: err.message})
  }
};
