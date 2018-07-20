var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res){
    // console.log("we got a get request")
    burger.all(function(data){
        var hbsObj = {
            burgers: data
        };
        console.log("burg obj: " + hbsObj);
        res.render("index", hbsObj);
    });
});
router.post("api/burgers", function(req, res){
    burger.insert("burgers", req.body.burger_name, function(result){
        // res.json({ id: result.insertId})
        console.log(result.insertId);
    });
});
router.put("/api/burgers/:id", function(req, res){
    var devoured = "id = " + req.params.id;
    console.log("sending devoured condition", devoured);

    burger.update({
        devoured: devoured
    }, function(result){
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
}); 

module.exports = router;