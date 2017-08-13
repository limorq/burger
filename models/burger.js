var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, data, cb) {
    orm.insertOne("burger", data, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne("burger", id, function(res) {
      cb(res);
    });
  }
 };

 module.exports = burger;