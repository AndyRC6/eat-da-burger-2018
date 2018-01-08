var pool = require('./connection');

module.exports = {
    selectAll: function(){
        pool.getConnection(function(err, connection){
            if(err) throw err;

            connection.query("SELECT * FROM burgers", function(err, data){
                if(err) throw err;
                return data;
                connection.release();
            })
        })
    },
    insertOne: function(name){
        pool.getConnection(function(err, connection){
            if(err) throw err;

            connection.query("INSERT INTO burgers SET ?", {burger_name: name, devoured: false}, function(err, results){
                if(err) throw err;
                connection.release();
            })
        })
    },
    udpateOne: function(id){
        pool.getConnection(function(err, connection){
            if(err) throw err;

            connection.query("UPDATE BURGERS SET devoured = ? where id = ?", [true, id], function(err, results){
                if(err) throw err;
                connection.release();
            })
        })
    }
}