let Controller = require('./Controller');

class EpicController extends Controller {

    constructor() {
        super();
        this.epic = require('../model/Epic');
    }

    getListEpic(callback) {
        this.epic.findAll(function (rows) {
            callback(rows);
        });
    }

    createEpic(name, idProject, callback) {
        this.epic.createEpic(name, idProject, callback);
    }

    editEpic(name, idEpic, callback) {
        this.epic.editEpic(name, idEpic, callback);
    }




}

module.exports = EpicController;