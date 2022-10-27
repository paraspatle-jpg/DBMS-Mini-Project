import pool from "./../index.js";

export const addtoFav = async (req, res) => {
    try{
        const {songid} = req.params;
        const values = [req.user.user_id,songid];
        await pool.query("insert into favourites values($1,$2)",values);

        res.status(200).send({message:"Added To Favorites"});
    }
    catch(err){

    }
}
export const getFav = async (req, res) => {
    try{
        const values = [req.user.user_id];
        const rows = await pool.query("select * from favourites where user_id = $1",values);
        console.log(rows.rows);
        res.status(200).send({favourites:rows.rows,message:"Success"});
    }
    catch(err){

    }
}