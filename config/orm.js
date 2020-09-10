const connection = require("./connection.js");
const e = require("express");

const orm = {
    selectAll: function(table, col, val) {
        const query = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(query, [table, col, val], function(err,data){
            if (err) throw err;
            console.log(data);
        })
    },
    insertOne: function(table, nameCol, devouredCol, nameVal, devouredVal) {
        const query = "INSERT INTO ?? (??,??) VALUES (?,?)";
        connection.query(query, [table, nameCol, devouredCol, nameVal, devouredVal], function(err,data){
            if (err) throw err;
            console.log(data)
        })
    },
    updateOne: function() {
        
    }
}

module.exports = orm;