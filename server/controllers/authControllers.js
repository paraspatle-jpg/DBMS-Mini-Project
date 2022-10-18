import pool from "./../index.js";
import jwt from "jsonwebtoken";

// import bcrypt from "bcrypt";

// const validatePassword = (password) => {};
// const hashPassword = async (user) => {};

export const getUser = async (req, res) => {
  try {
    res.status(200).send({user:req.user});
  }catch (err) {
    return res.status(500).send({ message: "Something Went wrong", err });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const values1 = [email];
    const user = await pool.query(
      "SELECT * FROM user_info WHERE email_id=$1",
      values1
    );
    if (!user) {
      res.status(400).send({ message: "User not found" });
    }
    if (password !== user.rows[0].password) {
      return res.status(400).send({ message: "Incorrect Password" });
    }
    const token = await jwt.sign(
      { user_id: user.rows[0].user_id },
      process.env.JWT_SECRET_KEY
    );
    delete user.rows[0].password;
    return res
      .status(200)
      .send({ user: user.rows[0], token, message: "Login Success" });
  } catch (err) {
    return res.status(500).send({ message: "Something Went wrong", err });
  }
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const values1 = [username, email, password];
    console.log(username, email, password);
    const values2 = [email];
    const user = await pool.query(
      "SELECT * FROM user_info WHERE email_id=$1;",
      values2
    );

    if (user.rowCount >= 1) {
      return res.status(400).send({ message: "Email already in use" });
    }
    // const rounds = 8;
    // const hash = await bcrypt.hash(password, rounds);
    // password = hash;
    if (password.length < 8)
      return res.status(400).send({ message: "Password too short" });
    const newUser = await pool.query(
      "INSERT INTO user_info(name, email_id, password) VALUES($1,$2,$3) RETURNING *;",
      values1
    )
    const token = jwt.sign(
      { user_id: newUser.rows[0].user_id },
      process.env.JWT_SECRET_KEY
    );
    delete newUser.rows[0].password;
    res
      .status(200)
      .send({ user: newUser.rows[0], token, message: "Signup Success" });
  } catch (err) {
    return res.status(500).send({ message: "Something Went wrong", err });
  }
};
