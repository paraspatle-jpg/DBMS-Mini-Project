import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import pg from "pg"

dotenv.config({});

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use("/auth",authRoutes);

const config = {
  user: "postgres", //this is the db user credential
  database: "DBMS",
  password: "Rparas@1203",
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on("connect", (client) => {
    console.log("connected to the Database");
});
app.listen('5000',()=>{
    console.log('Sever Listening on the port 5000')
})
export default pool;