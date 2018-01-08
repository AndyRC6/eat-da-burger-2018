var mysql = require("mysql");

var pool = mysql.createPool({
  host: "us-cdbr-iron-east-05.cleardb.net",
  port: 3306,

  // Your username
  user: "b3ee460c9f4aca",

  // Your password
  password: "9e88e9ad",
  database: "heroku_597a11a4ecb5ea1"
});

module.exports = pool;
