let Model = require('./Model');

class Ability extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('ability', {
            id_ability: { type: 'serial', key: true }, // the auto-incrementing primary key
            name_ability: { type: 'text' }
        });
        this.instance.bind(this);
    }

     findAll(callback){
        this.instance.find({}, function (err, rows) {
            if (err) throw err; // Error al consultar la base de datos
            callback(rows);
        });
    }

}

module.exports = new Ability();