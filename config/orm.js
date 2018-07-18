var connection = require('../config/connection.js');

function createQMarksString(numberOfMarks){
    var marksArr = [];
    for (marks in numberOfMarks){
        marksArr.push("?");
    }
    return marksArr.toString();
}

var orm = {
    selectAll: function(table){

    },
    instertOne: function(table){

    }, 
    updateOne: function(table){

    }
}

module.exports = orm;