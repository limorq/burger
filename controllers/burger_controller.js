var express = require("express");
var router = express.Router();
var burg = require("../models/burger.js");

router.get("/", function(req, res) {
  burg.selectAll(function(data) {
  var hbsObject = { burger: data };
  res.render("index", hbsObject);
  });

});

router.post("/", function(req, res) {
  burg.insertOne("burger", req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.put("/", function(req, res) {
  var id = parseInt(req.body.id);
  burg.updateOne(id, function() {    
    res.redirect("/");
  });
});

module.exports = router;