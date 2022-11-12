import jwt from "jsonwebtoken";
import pool from "../index.js"

export const auth = async (req, res, next) => {
  try {
    console.log(req.get('authorization'));
    const token = req.get('authorization');
    // console.log(token);
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(JSON.stringify(decoded));
    const values= [decoded.user_id];
    const newUser = await pool.query("SELECT * FROM user_info WHERE user_id=$1",values);
    if (newUser.rowCount === 0) {
      res.status(403).send({ msg: "Authorization failed" });
    }

    // console.log(newUser.rows[0]);

    delete newUser.rows[0].password;
    req.token = token;
    req.user = newUser.rows[0];

    next();
  } catch (err) {
    res.status(403).send({ message: "Authorization app Failed",err });
  }
};
