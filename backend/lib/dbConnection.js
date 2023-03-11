const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "localhost", // HOST NAME
    user: "root", // USER NAME
    database: "gfg-agro-db", // DATABASE NAME
    password: "archikirar55", // DATABASE PASSWORD
  },console.log("connected to database - gfg-agro-db"))
  .on("error", (err) => {
    console.log("Failed to connect to Database - gfg-agro-db", err);
  });

module.exports = db_connection;