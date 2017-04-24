let Model = require('./Model');

class Task extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('task', {
            id_task: { type: 'serial', key: true }, // the auto-incrementing primary key
            name: { type: 'text' },
            id_story: { type: 'number' },
            decription: { type: 'text' },
            time: { type: 'number' },
            fase: { type: 'text' },
            date_start: { type: 'date' },
            date_end: { type: 'date' }
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


    createTask(name, description, time, idStory, callback) {
        this.db.driver.execQuery(
            "INSERT INTO task (name, id_story, description, time) VALUES (?,?,?,?)",
            [name, idStory, description, time],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    editTask(name, idTask, callback) {
        this.db.driver.execQuery(
            "UPDATE task SET name = ? WHERE id_task = ?",
            [name, idTask],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    assingResponsable(idUser, idTask, callback) {
        this.db.driver.execQuery(
            "INSERT INTO user_task (id_user, id_task) VALUES (?,?)",
            [idUser, idTask],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    editResponsable(idUser, idTask, callback) {
        this.db.driver.execQuery(
            "UPDATE user_task SET id_user = ? WHERE  id_task = ?",
            [idUser, idTask],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    removeResponsable(idUser, idTask, callback) {
        this.db.driver.execQuery(
            "DELETE FROM user_task WHERE id_user = ? AND id_task = ?",
            [idUser, idTask],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

}

module.exports = new Task();    
