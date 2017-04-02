let Model = require('./Model');

class User extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('user', {
            id_user: { type: 'serial', key: true }, // the auto-incrementing primary key
            name: { type: 'text' },
            email: { type: 'text' },
            password: { type: 'text' },
            recovery: { type: 'text' }
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

module.exports = new User();