let Model = require('./Model');

class Sprint extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('sprint', {
            id_sprint: { type: 'serial', key: true }, // the auto-incrementing primary key
            id_release: { type: 'number' },
            name: { type: 'text' },
            start_date: { type: 'text' },
            end_date: { type: 'text' },
        });
        this.instance.bind(this);
    }

    findAll(callback) {
        this.instance.find({}, function (err, rows) {
            if (err) throw err; // Error al consultar la base de datos
            callback(rows);
        });
    }

    create(name, id_release, start_date, end_date, callback) {
        this.db.driver.execQuery(
            "INSERT INTO sprint (name, id_release, start_date, end_date) VALUES (?,?,?,?)",
            [name, id_release, start_date, end_date],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    edit(id_sprint, name, id_release, start_date, end_date, callback) {
        this.db.driver.execQuery(
            "UPDATE sprint SET name = ?, id_release = ?, start_date = ?, end_date = ? WHERE id_sprint = ?",
            [name, id_release, start_date, end_date, id_sprint],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

}

module.exports = new Sprint();