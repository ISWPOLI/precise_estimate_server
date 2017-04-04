let Model = require('./Model');

class Rol extends Model {

    constructor() {
        super();
    }

	initialize() {
        this.instance = this.db.define('rol', {
            id_rol: { type: 'serial', key: true }, // the auto-incrementing primary key
            name: { type: 'text' }
        });
        this.instance.bind(this);
    }    


    findAll(callback){
        this.instance.find({}, 
            function (err, rows) {
            if (err) throw err; // Error al consultar la base de datos
            callback(rows);
        });
    }

    createRol(nameRol, callback){
        this.db.driver.execQuery(
          "INSERT INTO rol (name) VALUES (?)",
          [nameRol],
          function (err, data) {
            if (err) throw err;
            callback(   );
          }
        )
    }


    removeRol(idRol, callback){
        this.db.driver.execQuery(
          "DELETE FROM rol WHERE id_rol = ?",
          [idRol],
          function (err, data) {
            if (err) throw err;
            callback(   );
          }
        )
    }


	assingValueRolAbility(idRol, idAbility, callback){
        this.db.driver.execQuery(
          "INSERT INTO rol_ability (id_rol,id_ability) VALUES (?, ?)",
          [idRol, idAbility],
          function (err, data) {
            if (err) throw err;
            callback(   );
          }
        )
    }



    }    


module.exports = new Rol();