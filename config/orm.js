var connection = require("./connection.js");

var orm = {
  all: function(table, cb) {
    var queryString = "SELECT * FROM burger";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, burger, date, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured, date) VALUES (?, ?, ?)";

    connection.query(queryString, 
      (burger, false, date), 
      function(err, result) {
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(table, burger, cb) {
    var queryString = "UPDATE burger SET ? WHERE ?";

    connection.query(queryString, 
        {devoured:true},
        {burger_name:burger}, 
        function(err, result) {
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;