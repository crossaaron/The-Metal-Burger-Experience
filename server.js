var express = require("express");
var bodyParser = require("body-parser");
var burger = require('./models/burger.js');
var port = process.env.PORT || 3000;
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgersController.js");

// setting static server directory at public in express
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

app.get('/', function (req, res) {
    burger.selectAll(function (data) {
        console.log(data);
    })
});


app.use("/", routes);

app.listen(port);
