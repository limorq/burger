var connection = require("./connection.js");
var moment = require("moment");

var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM burger";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }     
      cb(result);
    });
  },
  insertOne: function(table, data, cb) {
    var time = moment().format("YYYYMMDDhhmmss");
    var queryString = "INSERT INTO burger (burger_name, devoured, timeOf) VALUES (?, false, ?)";
    connection.query(queryString,
      [data, time], 
      function(err, result) {
      cb(result);
    });
  },
  updateOne: function(table, data, cb) {
    var queryString = "UPDATE burger SET devoured = ? WHERE id = ?";
    connection.query(queryString, 
        [true, data], 
        function(err, result) {  
          if (err) console.log(err);
          cb(result);
    });
  }
};

module.exports = orm;