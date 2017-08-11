var express = require("express");

var router = express.Router();
var burg = require("../models/burger.js");



router.get("/", function(req, res) {
  burg.selectAll(function(data) {
  var hbsObject = { burger: data };
  console.log(hbsObject);
  res.render("index", hbsObject);
});

});

router.post("/", function(req, res) {
  burg.insertOne(req.body.burger_name, req.body.date, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var id = req.params.id;

  burg.updateOne(id, function() {
    res.redirect("/");
  });
});

module.exports = router;