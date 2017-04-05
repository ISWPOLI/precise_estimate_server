let Controller = require('./Controller');

class ProjectController extends Controller {

    constructor() {
        super();
        this.project = require('../model/Project');
    }

    getListProject(callback) {
        this.project.findAll(function (rows) {
            callback(rows);
        });
    }


	createProject(name, type, dateStart, dateEnd, valueEstimate, timeEstimate, idStatus,callback){
        this.project.createProject(name, type, dateStart, dateEnd, valueEstimate, timeEstimate, idStatus, callback);
    }


}

module.exports = ProjectController;