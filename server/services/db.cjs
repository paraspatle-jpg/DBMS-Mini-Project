const pg = require("pg");
require("dotenv");

// const config = {
//   user: "postgres", //this is the db user credential
//   database: "DBMS",
//   password: "Rparas@1203",
//   port: 5432,
//   max: 10, // max number of clients in the pool
//   idleTimeoutMillis: 30000,
// };

// const pool = new pg.Pool(config);

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false,
});

pool.on("connect", (client) => {
  console.log("connected to the Database");
});

const createTables = async () => {
  const userTable = `create table user_info(
    user_id SERIAL primary key,
    name varchar(128) not null,
    email_id varchar(128) not null unique,
    password varchar(16) not null check (length(password)>8),
    street_address varchar(128),
    date_of_birth date,
    artist_or_not varchar(1) not null default 0
    );
    
    create table friends(
      user_id int ,
      friend_id int ,
      primary key(user_id,friend_id)
    );`;
  await pool
    .query(userTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
  setTimeout(() => {console.log("Paras")}, 5000);
};

//export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};

require("make-runnable");
