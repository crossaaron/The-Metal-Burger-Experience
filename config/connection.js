require('dotenv').config();

var keys = require("./keys.js");
var mysql = require('mysql');
var connection = mysql.createConnection(keys.sqlLogin);

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection