const connection = require("./connection.js");
const e = require("express");

const orm = {
  selectAll: function (table, col, val, cb) {
    const query = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(query, [table, col, val], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function (table, nameCol, devouredCol, nameVal, devouredVal, cb) {
    const query = "INSERT INTO ?? (??,??) VALUES (?,?)";
    connection.query(
      query,
      [table, nameCol, devouredCol, nameVal, devouredVal],
      function (err, res) {
        if (err) throw err;
        cb(res);
      }
    );
  },
  updateOne: function (table, devouredCol, devouredVal, nameCol, nameVal, cb) {
    const query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(
        query,
        [table, devouredCol, devouredVal, nameCol, nameVal],
        function (err, res) {
            if (err) throw err;
            cb(res)
        }
    )
  },
};

module.exports = orm;
