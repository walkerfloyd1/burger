var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },
    insertOne: function(columns, values, callback) {
        orm.insertOne(columns, values, function(res) {
            callback(res);
        })
    },
    updateOne: function(vals, condition, callback) {
        orm.updateOne(vals, condition, function (res) {
            callback(res);
        });
    }

};

module.exports = burger;