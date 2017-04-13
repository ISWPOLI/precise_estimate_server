let Model = require('./Model');

class Epic extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('epic', {
            id_epic: { type: 'serial', key: true }, // the auto-incrementing primary key
            name: { type: 'text' }                        
        });
        this.instance.bind(this);
    }

    findAll(callback) {
        this.instance.find({},
            function (err, rows) {
                if (err) throw err; // Error al consultar la base de datos
                callback(rows);
            });
    }


    createEpic(name, callback){
        this.db.driver.execQuery(
          "INSERT INTO epic (name) VALUES (?)",
          [name],
          function (err, data) {
            if (err) throw err;
            callback(  data );
          }
        )
    }


     editEpic(name, idEpic, callback){
        this.db.driver.execQuery(
          "UPDATE epic SET name = ? WHERE id_epic = ?",
          [name,idEpic],
          function (err, data) {
            if (err) throw err;
            callback(  data );
          }
        )
    }

}

module.exports = new Epic();    
