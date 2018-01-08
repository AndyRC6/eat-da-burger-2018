var burger = require('../models/burger.js');
var pool = require('../config/connection.js');


module.exports = function(app){
    app.get("/", function(req, res){

        //=======had to do it this way, ORM was returning undefined??=========
        pool.getConnection(function(err, connection){
            if(err) throw err;
            connection.query("select * from burgers", function(err, data){
                if(err) throw err;
                console.log(data);
                res.render("index", {burger: data});
                connection.release();
            })
        })
        
        
    });

    app.post("/burgers/add", function(req, res){
        burger.insertBurger(req.body.name);
        res.end();
    });

    app.post("/burgers/devour", function(req, res){
        burger.updateBurger(req.body.id);
        res.end();
    })
}