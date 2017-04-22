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

    getCompleteProject(id_project, callback) {
        this.project.findCompleteProject(id_project, function (rows) {
            let resp = {};
            for (let k in rows) {
                if (!resp.hasOwnProperty("e" + rows[k].id_epic)) {
                    resp["e" + rows[k].id_epic] = { features: {} };
                }
                var e = resp["e" + rows[k].id_epic];
                e.id_epic = rows[k].id_epic;
                e.epic = rows[k].epic;
                if (rows[k].id_feature != null) {
                    if (!e.features.hasOwnProperty("f" + rows[k].id_feature)) {
                        e.features["f" + rows[k].id_feature] = { stories: {} };
                    }
                    var f = e.features["f" + rows[k].id_feature];
                    f.id_feature = rows[k].id_feature;
                    f.feature = rows[k].feature;
                    if (rows[k].id_story != null) {
                        if (!f.stories.hasOwnProperty("s" + rows[k].id_story)) {
                            f.stories["s" + rows[k].id_story] = { tasks: {} };
                        }
                        var s = f.stories["s" + rows[k].id_story];
                        s.id_story = rows[k].id_story;
                        s.id_sprint = rows[k].id_sprint != null ? rows[k].id_sprint : 0;
                        s.story = rows[k].story;
                        if (rows[k].id_task != null) {
                            if (!s.tasks.hasOwnProperty("t" + rows[k].id_task)) {
                                s.tasks["t" + rows[k].id_task] = {};
                            }
                            var t = s.tasks["t" + rows[k].id_task];
                            t.id_task = rows[k].id_task;
                            t.task = rows[k].task;
                        }
                    }
                }
            }
            callback(resp);
        });
    }


    createProject(name, type, dateStart, dateEnd, valueEstimate, timeEstimate, idStatus, callback) {
        this.project.createProject(name, type, dateStart, dateEnd, valueEstimate, timeEstimate, idStatus, callback);
    }

     assingCostProjectRol(idProject, idRol, value,callback){
        this.project.assingCostProjectRol(idProject, idRol, value, callback);
    }

    findProject(idProject, callback) {
        this.project.findProject(idProject, callback);
    }


}

module.exports = ProjectController;