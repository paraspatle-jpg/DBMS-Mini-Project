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
    user_id int primary key,
    name varchar(128) not null,
    email_id varchar(128) not null unique,
    password varchar(16) not null check (length(password)>8),
    street_address varchar(128),
    date_of_birth date,
    artist_or_not varchar(1) not null default 0
    );
    create sequence user_id_seq
    start with 1
    increment by 1
    minvalue 0
    maxvalue 2147483647
    cycle;`;
  pool
    .query(userTable)
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
