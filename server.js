var express = require("express");
var bodyParser = require("body-parser");
var burger = require('./models/burger.js');

var port = process.env.PORT || 3000;

var app = express();


app.use(bodyParser.urlencoded({ extended: false }));

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.

app.get('/', function (req, res) {
    burger.selectAll(function (data) {
        console.log(data);
    })
});
// var routes = require("./controllers/burgerController.js");

// app.use("/", routes);

app.listen(port);
