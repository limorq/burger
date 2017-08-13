var connection = require("./connection.js");
var moment = require("moment");

var orm = {
  all: function(table, cb) {
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
    var queryString = "UPDATE burger SET ? WHERE ?";

    connection.query(queryString, 
        {devoured:true},
        {id:data}, 
        function(err, result) {
        console.log(result);    
      cb(result);
    });
  }
};

module.exports = orm;