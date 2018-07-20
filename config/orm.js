var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableName, callback){
        var query = `SELECT * FROM ${tableName}`;
        // console.log("orm select all query")
        connection.query(query, (err, data)=>{
            if (err){
                console.log(err);
                callback(err);
            }
            // console.log(data);
            callback(data);
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
        console.log("query: " + query)
        connection.query(query, values, (err, data) => {
            if (err){
                console.log(err);
                callback(err);
            }
                callback(data);
            
            
        })

    }, 
    updateOne: function(tableName, id, callback){
        // var keys = [];
        // var values = [];
        var id;
        // console.log(JSON.stringify(model));
        // Object.keys(model).forEach(x => {
        //     if(x==='id'){
        //         id=model[x];
        //     }
        //     keys.push(`${x}=?`);
        //     values.push(model[x]);        
        // });
        // values.push(id);
        var query = `UPDATE ${tableName} SET devoured = 1 WHERE id = ?`;
        connection.query(query, id, (err, data) => {
            if (err){
                console.log(err);
                return false;
            }
            callback(data);
        })
    }
}

module.exports = orm;