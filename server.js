//=========Boiler Plate Code =============
var express = require('express');
var exphbs = require("express-handlebars");
var routes = require('./controllers/burgers_controller.js');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var port = process.env.PORT || 3000;

routes(app);

//========Make application listen for requests========

app.listen(port);