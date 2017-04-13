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

    createEpic(name,callback){
        this.epic.createEpic(name, callback);
    }

    editEpic(name, idEpic, callback){
        this.epic.editEpic(name, idEpic, callback);
    }

    
}

module.exports = EpicController;