// ===================================
//  DEPENDENCIES & CONFIGS:
//  express, handlebars, morgan, mongoose
// ===================================

var express = require("express");

var app = express();

var exphbs = require("express-handlebars");

var logger = require("morgan");
// var mongoose = require("mongoose");

//  for logging requests
app.use(logger("dev"));

// Connect to the Mongo DB and activates
// mongoose.connect("mongodb://localhost/news_scrape_db", { useNewUrlParser: true });

//  Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;

// ===================================
//  SERVE STATIC FILES & ROUTES, EXPORTS
// ===================================
//in a folder called handlebars and in a page called main
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//grabbing the files and data public folder
// see the main.handlebars template to reflect its use:
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

// Import routes
var routes = require("./controllers/nsControllers");
// give the server access to routes
app.use("/", routes);

// ===================================
//  LISTENERS
// ===================================

app.listen(PORT, function() {
  console.log("Server listening: ", PORT);
});
