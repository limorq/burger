var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, date, cb) {
    orm.create("burger", burger, date, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.update("burger", id, function(res) {
      cb(res);
    });
  }
 };

 module.exports = burger;