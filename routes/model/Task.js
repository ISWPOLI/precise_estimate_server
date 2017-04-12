let Model = require('./Model');

class Task extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('task', {
            id_task: { type: 'serial', key: true }, // the auto-incrementing primary key
            name: { type: 'text' } ,
            id_story: { type: 'number'}                       
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


    createTask(name, idStory, callback){
        this.db.driver.execQuery(
          "INSERT INTO task (name, id_story) VALUES (?,?)",
          [name, idStory],
          function (err, data) {
            if (err) throw err;
            callback(data);
          }
        )
    }

    editTask(name, idTask, callback){
        this.db.driver.execQuery(
          "UPDATE task SET name = ? WHERE id_task = ?",
          [name,idTask],
          function (err, data) {
            if (err) throw err;
            callback(  data );
          }
        )
    }

}

module.exports = new Task();    
