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

    getTaskforUser(idProject, idStatus, callback){
        this.db.driver.execQuery(
            "select u.name ,count(*) as data from user u  inner join user_task ut on u.id_user = ut.id_user inner join task t on t.id_task = ut.id_task inner join story s on s.id_story = t.id_story inner join feature f on f.id_feature = s.id_feature inner join epic e on e.id_epic = f.id_epic inner join project_epic pe on e.id_epic = pe.id_epic inner join project p on p.id_project = pe.id_project inner join status st on st.id_status = t.id_status where p.id_project = ? and st.id_status = ? group by u.name;",
            [idProject, idStatus],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    removeTask(idTask, callback){
        this.db.driver.execQuery(
            "call sp_remove_task (?);",
            [idTask],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

    getTask(idTask, callback){
        this.db.driver.execQuery(
            "SELECT name, description, time, date_start, date_end, status FROM task t LEFT JOIN status s ON t.id_status = s.id_status WHERE id_task = ?;",
            [idTask],
            function(err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }


    setTaskStatus(idStatus, idTask, callback){
        this.db.driver.execQuery(
            "UPDATE task SET id_status = ? WHERE id_task = ?",
            [idStatus, idTask],
            function(err, data){
                if (err) throw err;
                callback(data);
            }
        )       
    }


    

}

module.exports = new Task();    
