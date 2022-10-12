const pg = require("pg");

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

const createTables = () => {
  const userTable = `create table user_info(
    user_id number(8) primary key,
    name varchar2(128) not null,
    email_id varchar2(128) not null,
    password varchar2(16) not null check (length(password)>8),
    street_address varchar2(128),
    date_of_birth date,
    artist_or_not varchar2(1) not null
  )`;
  pool
    .query(schoolTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

//export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};

require("make-runnable");
