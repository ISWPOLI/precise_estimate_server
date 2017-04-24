let Model = require('./Model');

class Release extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('release', {
            id_release: { type: 'serial', key: true }, // the auto-incrementing primary key
            id_project: { type: 'number' },
            name: { type: 'text' },
            due_date: { type: 'text' },
        });
        this.instance.bind(this);
    }

    findAll(callback) {
        this.instance.find({}, function (err, rows) {
            if (err) throw err; // Error al consultar la base de datos
            callback(rows);
        });
    }

    create(name, id_project, due_date, callback) {
        this.db.driver.execQuery(
            "INSERT INTO `release` (name, id_project, due_date) VALUES (?,?,?)",
            [name, id_project, due_date],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    edit(id_release, name, id_project, due_date, callback) {
        this.db.driver.execQuery(
            "UPDATE`release` SET name = ?, id_project = ?, due_date = ? WHERE id_release = ?",
            [name, id_project, due_date, end_date, id_release],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    getReleasePlanning(id_project, callback) {
        this.db.driver.execQuery(
            "SELECT `release`.id_release,`release`.name as nrelease, DATE_FORMAT(`release`.due_date,'%Y-%m-%d') as due_date,`sprint`.id_sprint,`sprint`.name as nsprint, DATE_FORMAT(`sprint`.start_date,'%Y-%m-%d') as start_date, DATE_FORMAT(`sprint`.end_date,'%Y-%m-%d') as end_date FROM `release` left JOIN `sprint` USING(id_release) WHERE `release`.id_project = ?",
            [id_project],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

}

module.exports = new Release();