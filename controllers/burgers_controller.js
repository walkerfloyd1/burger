var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function(data, err) {
        if (err) {
            console.log(err);
        }
        var obj = {
            burgers : data
        };
        console.log(obj);
        res.render('index', obj);
    });
});
router.post("/", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], ["req.body.burger_name", "req.body.devoured"], function () {
        res.redirect('/');
    })
})
router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log(condition);
    burger.updateOne({devoured: req.body.devoured}, condition, function () {
        res.redirect('/');
    });
});


module.exports = router;