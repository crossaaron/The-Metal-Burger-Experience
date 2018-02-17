require('dotenv').config();

exports.sqlLogin = {
    host: "localhost",
    port: process.env.PORT_ID,
    user: "root",
    password: process.env.SQL_ID,
    database: "burgers_DB"

};

