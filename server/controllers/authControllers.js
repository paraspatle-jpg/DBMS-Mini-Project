import pool from "./../services/db.cjs";
import bcrypt from "bcrypt";

const validatePassword = (password) => {};
const hashPassword = async (user) => {
  try {
  } catch (err) {}
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query(
      `SELECT * FROM user_info WHERE email=${email}`
    );
    if (!user) {
      res.status(400).send({ message: "user not found" });
    }
  } catch (err) {}
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await pool.query(
      `SELECT * FROM user_info WHERE email=${email}`
    );
    if (user) {
      res.status(400).send({ message: "Email already in use" });
    }
    const rounds = 8;
    const hash = await bcrypt.hash(password, rounds);
    password = hash;
    const newUser = { username, email, password };
  } catch (err) {}
};
