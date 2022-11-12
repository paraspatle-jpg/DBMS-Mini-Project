import http from "http";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import favouriteRoutes from "./routes/favouriteRoutes.js";
import playListRoutes from "./routes/playListRoutes.js";
import friendRoutes from "./routes/friendRoutes.js";
import chatRoomRoutes from "./routes/chatRoomRoutes.js";
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
app.use("/favourites", favouriteRoutes);
app.use("/playlists", playListRoutes);
app.use("/friends", friendRoutes);
app.use("/chat", chatRoomRoutes);

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("connect", (client) => {
  console.log("connected to the Database");
});

// pool
//   .query(
//     `
//     delete from chat;
//     `
//   )
//   .then((res) => {
//     console.log(res.rows);
//     pool.end();
//   })
//   .catch((err) => {
//     console.log(err);
//     pool.end();
//   });

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
global.io = io;
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
//    primary key(user_id,friend_id)
//    create table song(
//       song_id int primary key,
//       title varchar(255),
//       subtitle varchar(255),
//       image_url varchar(255),
//       url varchar(255)
//     );
//     drop table favourites;
//     create table favourites(
//     user_id int not null,
//     song_id int not null,
//     primary key(user_id,song_id)

//      drop table playlists;
//     create table playlists(
//       playlist_id serial primary key,
//       user_id int,
//       playlist_name varchar(255),
//       visibility varchar(1) not null default 1
//   );`;

//     `
//   create table chatRoom (
//   room_id serial primary key,
//   type varchar(255),
//   chat_admin int
//   );

//   create table roomParticipants(
//     room_id int not null,
//     user_id int not null,
//     primary key(user_id,room_id)
//   );

// create table chatMessage(
//   room_id int,
//   sender_id int,
//   message varchar(255),
//   messageTime timestamp not null default current_timestamp
// );`

// create table playlist_songs (
//         playlist_id int not null,
//         song_id int not null,
//         primary key(playlist_id,song_id)
//       );

//     drop table chat;
//     create table chat (
//       chat_id int DEFAULT NEXTVAL('chat_id_seq') primary key,
//       user1 int,
//       user2 int
//     );
//     ALTER SEQUENCE chat_id_seq RESTART WITH 10000;
//     insert into chat (user1, user2) values (111, 111) returning *;
