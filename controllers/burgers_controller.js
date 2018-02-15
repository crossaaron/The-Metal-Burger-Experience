var express = require("express");
var app = express();
var router = express.Router();
var burger = require('../models/burger.js')



app.get('/', function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
    })
})


module.exports = router