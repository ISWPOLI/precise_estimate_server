let Model = require('./Model');

class User extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('user', {
            id_user: { type: 'serial', key: true }, // the auto-incrementing primary key
            id_profile: {type: 'integer'},
            name: { type: 'text' },
            email: { type: 'text' },
            password: { type: 'text' },
            recovery: { type: 'text' }
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

    assingValueAbility(idUser, idAbility, callback){
        this.db.driver.execQuery(
          "INSERT INTO user_ability(id_user,id_ability) VALUES (?, ?)",
          [idUser, idAbility],
          function (err, data) {
            if (err) throw err;
            callback(   );
          }
        )
    }


    removeValueAbility(idUser, idAbility, callback){
        this.db.driver.execQuery(
          "DELETE FROM user_ability WHERE id_user =? AND id_ability=?",
          [idUser, idAbility],
          function (err, data) {
            if (err) throw err;
            callback(   );
          }
        )
    }


    assingProfile(idProfile, idUser, callback){
        this.db.driver.execQuery(
          "UPDATE user SET id_profile = ? WHERE id_user = ?",
          [idProfile, idUser],
          function (err, data) {
            if (err) throw err;
            callback(   );
          }
        )
    }


    readRolUser(idUser, callback){
        this.db.driver.execQuery(
          "SELECT r.name FROM rol r INNER JOIN user_rol ur ON r.id_rol = ur.id_rol INNER JOIN user u ON ur.id_user = u.id_user WHERE u.id_user =?",
          [idUser],
          function (err, rows) {
            if (err) throw err;
            callback(rows);
          }
        )
    }

}    





module.exports = new User();