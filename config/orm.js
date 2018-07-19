var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableName){
        var query = `SELECT * FROM ${tableName}`;
        connection.query(query, (err, data)=>{
            if (err){
                console.log(err);
                return false;
            }
            return data;
        })
    },
    insertOne: function(tableName, model, callback){
        var keys = [];
        var values = [];
        Object.keys(model).forEach(x => {
            keys.push(x);
            values.push(model[x]);
        })
        var marks = keys.map(x => '?');
        var query = `INSERT INTO ${tableName} (${keys})
        VALUES (${marks})`;

        connection.query(query, values, (err, data) => {
            if (err){
                console.log(err);
                return false;
            }
                callback(data);
            
            
        })

    }, 
    updateOne: function(tableName, model){
        var keys = [];
        var values = [];
        var id;
        Object.keys(model).forEach(x => {
            if(x==='id'){
                id=model[x];
            }
            keys.push(`${x}=?`);
            values.push(model[x]);        
        });
        values.push(id);
        var query = `UPDAATE ${tableName} SET ${keys} WHERE id = ?`;
        connection.query(query, values, (err, data) => {
            if (err){
                console.log(err);
                return false;
            }
            callback(data);
        })
    }
}

module.exports = orm;