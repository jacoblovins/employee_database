const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "docker123",
    database: "employee_tracker"
  });
  
  connection.connect((err) => {
    if (err) throw err;
  });

  connection.query = util.promisify(connection.query);

  module.exports = connection;