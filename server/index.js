import http from "http";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import { Server } from "socket.io";
import WebSockets from "./utils/WebSockets.js";
import pg from "pg";

dotenv.config({});

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  next();
});

app.use("/auth", authRoutes);

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("connect", (client) => {
  console.log("connected to the Database");
});

const server = http.createServer(app);
const io = new Server(server);
io.on("connection", WebSockets.connection);

server.listen("5000", () => {
  console.log("Sever Listening on the port 5000");
});

export default pool;

// const config = {
//   user: "postgres", //this is the db user credential
//   database: "DBMS",
//   password: "Rparas@1203",
//   port: 5432,
//   max: 10, // max number of clients in the pool
//   idleTimeoutMillis: 30000,
// };

// // const pool = new pg.Pool(config);
//----------------------------------------======================================================================
// const userTable = `create table user_info(
//   user_id SERIAL primary key,
//   name varchar(128) not null,
//   email_id varchar(128) not null unique,
//   password varchar(16) not null check (length(password)>8),
//   street_address varchar(128),
//   date_of_birth date,
//   artist_or_not varchar(1) not null default 0
//   );

//   create table friends(
//     user_id int ,
//     friend_id int ,
//     primary key(user_id,friend_id)
//   );`;
// pool
//   .query(userTable)
//   .then((res) => {
//     console.log(res);
//     pool.end();
//   })
//   .catch((err) => {
//     console.log(err);
//     pool.end();
//   });
