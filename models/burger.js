var orm = require('../config/orm');

var burger = {
    all: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insert: function(burger, callback){
        orm.insertOne("bugers", burger, function(res){
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