require('dotenv').config();

var keys = require("./keys.js");
var mysql = require('mysql');
var JAWSDB_URL = "mysql://vtqdqzx8wq2c0aqa:qwoppgj8lj4mylja@thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/m8nffqwjj2jqzyn2"

var connection;
if (process.env.JAWSDB_URL) {
    console.log(JAWSDB_URL);
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //local host
    connection = mysql.createConnection(keys.sqlLogin)
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection