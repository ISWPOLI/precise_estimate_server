let Service = require('./Service');
let ProjectController = require('../controller/ProjectController');

class ProjectService extends Service {

  constructor() {
    super();
    this.path = '/project';
    this.router.get('/', this.listProject.bind(this));
    this.router.post('/createProject', this.createProject.bind(this));
    this.router.get('/getCompleteProject', this.getCompleteProject.bind(this));
    this.router.get('/getReleasePlanning', this.getReleasePlanning.bind(this));
    this.router.get('/assingCostProjectRol', this.assingCostProjectRol.bind(this));
    this.router.get('/findProject', this.findProject.bind(this));
    this.router.post('/editProject', this.editProject.bind(this));
    this.router.post('/createRelease', this.createRelease.bind(this));
    this.router.post('/editRelease', this.editRelease.bind(this));
    this.router.post('/createSprint', this.createSprint.bind(this));
    this.router.post('/editSprint', this.editSprint.bind(this));
    this.router.post('/removeProject', this.removeProject.bind(this));
    this.projectController = new ProjectController();
  }

  /* GET users listing. */
  listProject(req, res, next) {
    this.projectController.getListProject(function (rows) {
      res.json(rows);
    });
  }

  getCompleteProject(req, res, next) {
    this.projectController.getCompleteProject(req.query.idProject, function (rows) {
      res.json(rows);
    });
  }

  getReleasePlanning(req, res, next) {
    this.projectController.getReleasePlanning(req.query.idProject, function (rows) {
      res.json(rows);
    });
  }

  createProject(req, res, next) {
    this.projectController.createProject(req.body.name, req.body.type, req.body.dateStart, req.body.dateEnd, req.body.valueEstimate, req.body.timeEstimate, req.body.idStatus, function (data) {
      res.json({ "Insert": data });
    });
  }

  assingCostProjectRol(req, res, next) {
    this.projectController.assingCostProjectRol(req.query.idProject, req.query.idRol, req.query.value, function (data) {
      res.json({ "Insert": data });
    });
  }

  findProject(req, res, next) {
    this.projectController.findProject(req.query.idProject, function (rows) {
      res.json(rows);
    });
  }

  editProject(req, res, next) {
    this.projectController.editProject(req.body.name, req.body.type, req.body.dateStart, req.body.dateEnd, req.body.value, req.body.time, req.body.idStatus, req.body.idProject, function (data) {
      res.json({ "Update": data });
    });
  }

  createRelease(req, res, next) {
    this.projectController.createRelease(req.body.name, req.body.idProject, req.body.dueDate, function (data) {
      res.json({ "Insert": data });
    });
  }

  editRelease(req, res, next) {
    this.projectController.editRelease(req.body.idRelease, req.body.name, req.body.idProject, req.body.dueDate, function (data) {
      res.json({ "Update": data });
    });
  }

  createSprint(req, res, next) {
    this.projectController.createSprint(req.body.name, req.body.idRelease, req.body.startDate, req.body.endDate, function (data) {
      res.json({ "Insert": data });
    });
  }

  editSprint(req, res, next) {
    this.projectController.editSprint(req.body.idSprint, req.body.name, req.body.idRelease, req.body.startDate, req.body.endDate, function (data) {
      res.json({ "Update": data });
    });
  }

  removeProject(req, res, next) {
    this.projectcController.removeProject(req.body.idProject, function (data) {
      res.json({ "Delete": data });
    });
  }

};

module.exports = new ProjectService();
