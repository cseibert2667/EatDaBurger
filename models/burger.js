const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function (nameVal, devouredVal, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", nameVal, devouredVal, function(res){
            cb(res);
        });
    },
    updateOne: function(devouredVal, nameVal, cb) {
        orm.updateOne("burgers", "devoured", devouredVal, "burger_name", nameVal, function(res){
            cb(res);
        });
    }
};

module.exports = burger;