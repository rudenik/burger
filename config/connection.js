var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "d8csxycapsajc8wa",
  password: "ve6vkk1svcmquxbk",
  database: "dc2eabk4ipnp9dr6",
  multipleStatements: true
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("make sure you're connected, the writing's on the wall");
});

module.exports = connection;