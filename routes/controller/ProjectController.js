let Controller = require('./Controller');

class ProjectController extends Controller {

    constructor() {
        super();
        this.project = require('../model/Project');
        this.release = require('../model/Release');
        this.sprint = require('../model/Sprint');
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

    getReleasePlanning(id_project, callback) {
        this.release.getReleasePlanning(id_project, function (rows) {
            let resp = {};
            for (let k in rows) {
                if (!resp.hasOwnProperty("r" + rows[k].id_release)) {
                    resp["r" + rows[k].id_release] = { sprints: {} };
                }
                var r = resp["r" + rows[k].id_release];
                r.id_release = rows[k].id_release;
                r.release = rows[k].nrelease;
                r.due_date = rows[k].due_date;
                if (rows[k].id_sprint != null) {
                    if (!r.sprints.hasOwnProperty("s" + rows[k].id_sprint)) {
                        r.sprints["s" + rows[k].id_sprint] = {};
                    }
                    var s = r.sprints["s" + rows[k].id_sprint];
                    s.id_sprint = rows[k].id_sprint;
                    s.sprint = rows[k].nsprint;
                    s.start_date = rows[k].start_date;
                    s.end_date = rows[k].end_date;
                }
            }
            callback(resp);
        });
    }

    createProject(name, type, dateStart, dateEnd, valueEstimate, timeEstimate, idStatus, callback) {
        this.project.createProject(name, type, dateStart, dateEnd, valueEstimate, timeEstimate, idStatus, callback);
    }

    assingCostProjectRol(idProject, idRol, value, callback) {
        this.project.assingCostProjectRol(idProject, idRol, value, callback);
    }

    findProject(idProject, callback) {
        this.project.findProject(idProject, callback);
    }

    editProject(name, type, dateStart, dateEnd, value, time, idStatus, idProject, callback) {
        this.project.editProject(name, type, dateStart, dateEnd, value, time, idStatus, idProject, callback);
    }

    createRelease(name, id_project, due_date, callback) {
        this.release.create(name, id_project, due_date, callback);
    }

    editRelease(id_release, name, id_project, due_date, callback) {
        this.release.edit(id_release, name, id_project, due_date, callback);
    }

    createSprint(name, id_release, start_date, end_date, callback) {
        this.sprint.create(name, id_release, start_date, end_date, callback);
    }

    editSprint(id_sprint, name, id_release, start_date, end_date, callback) {
        this.sprint.edit(id_sprint, name, id_release, start_date, end_date, callback);
    }

    removeProject(idProject,callback){
        this.project.removeProject(idProject, callback);
    }

}

module.exports = ProjectController;