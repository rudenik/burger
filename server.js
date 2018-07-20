var express = require('express');
var parser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');
var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main", 
                                    partialsDir  :  __dirname + '/views/layouts/partials/'                    }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(routes);

app.listen(PORT, function(){
    console.log("we are listening on ... " + PORT);
})