var orm = require('../config/orm');

var burger = {
    all: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insert: function(burger, callback){
        // console.log("Burger to be inserted: " + JSON.stringify(burger));
        orm.insertOne("burgers", burger, function(res){
            callback(res);
        });
    },
    update: function(burger, callback){
        orm.updateOne("burgers", burger, function(res){
            callback(res);
        });
    }
}

module.exports = burger;