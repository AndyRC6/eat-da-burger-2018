var orm = require('../config/orm.js');

module.exports = {
    getAllBurgers: orm.selectAll(),
    insertBurger: function(name){
        orm.insertOne(name);
    },
    updateBurger: function(id){
        orm.udpateOne(id);
    }
}