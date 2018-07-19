var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res){
    burger.all(function(data){
        var burgObj = {
            burgers: data
        };
        console.log(burgObj);
        res.render("index", burgObj);
    });
});
router.post("api/burgers", function(req, res){
    burger.insert("burgers", req.body.burger_name, function(result){
        // res.json({ id: result.insertId})
        console.log(result.insertId);
    });
});
