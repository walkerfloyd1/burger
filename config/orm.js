var connection = require("./connection.js");


var orm = {
    selectAll: function(callback) {
            connection.query("SELECT * FROM burgers", function (err, result) {
                if (err) throw err;
                callback(result);
            });
    },
    insertOne: function(columns, values, callback) {
                connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (" + columns.toString() + ")", values, 
                function (err, result) {
                    if (err) throw err;
                    callback(result);
                });
    },
    
    updateOne: function (vals, condition, callback) {
            connection.query("UPDATE burgers SET ? WHERE ?", [{condition}, {vals}], function (err, result) {
                if (err) throw err;
                callback(result);
            })
        }
};

module.exports = orm;