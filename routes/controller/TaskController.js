let Controller = require('./Controller');

class TaskController extends Controller {

    constructor() {
        super();
        this.task = require('../model/Task');
    }

    getListTask(callback) {
        this.task.findAll(function (rows) {
            callback(rows);
        });
    }

    createTask(name, description, time, idStory, callback) {
        this.task.createTask(name, description, time, idStory, callback);
    }

    editTask(name, idTask, callback) {
        this.task.editTask(name, idTask, callback);
    }

    assingResponsable(idUser, idTask, callback) {
        this.task.assingResponsable(idUser, idTask, callback);
    }

    editResponsable(idUser, idTask, callback) {
        this.task.editResponsable(idUser, idTask, callback);
    }

    removeResponsable(idUser, idTask, callback) {
        this.task.removeResponsable(idUser, idTask, callback);
    }

}

module.exports = TaskController;