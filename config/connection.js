require('dotenv').config();

var keys = require("./keys.js");
var mysql = require('mysql');



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