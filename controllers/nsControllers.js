// ===================================
//  DEPENDENCIES & CONFIGS
//  express, router, models
//  cheerio, axios
// ===================================

//  routing tools
var express = require("express");
var router = express.Router();

//  scraping tools
// var cheerio = require("cheerio");
// var axios = require("axios");

// database models for grabbing articles
// var db = require("./models")


// ===================================
//  ROUTES
// ===================================

//  1. create a route for the homepage /index.handlebars
//      this route should: 
    //  grab articles using axios and display
    //  save articles
    //  add an article note
    //  save the article note
 //***** Landing Page *******//

router.get("/", function(req, res) {
    res.render("index", {
      title: "Home Page",
      style: "style.css",
    });   
  });

//  2. create a route that lists the saved articles /saved_articles.handlebars
//      this route should:
    //  view article and notes
    //  delete from saved

router.get("/saved_articles", function(req, res) {
    res.render("saved_articles", {
      title: "Saved Articles",
      style: "style.css",
    });   
  });

module.exports = router;