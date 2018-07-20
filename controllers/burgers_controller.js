var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObj = {
            burgers: data
        };
        console.log("burg obj: " + hbsObj);
        res.render("index", hbsObj);
    });
});
router.post("/api/burgers", function(req, res){
    console.log(req.body);
    burger.insert(req.body, function(result){
        console.log(result.insertId);
    });
    res.end();
    
});
router.put("/api/burgers/:id", function(req, res){
    var devoured = req.params.id;
    console.log("sending devoured condition", devoured);

    burger.update(
        devoured, function(result){
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
}); 

module.exports = router;