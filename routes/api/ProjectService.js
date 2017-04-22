let Service = require('./Service');
let ProjectController = require('../controller/ProjectController');

class ProjectService extends Service {

  constructor() {
    super();
    this.path = '/project';
    this.router.get('/', this.listProject.bind(this));
    this.router.post('/createProject', this.createProject.bind(this));
    this.router.get('/getCompleteProject', this.getCompleteProject.bind(this));
    this.router.get('/assingCostProjectRol', this.assingCostProjectRol.bind(this));
    this.router.get('/findProject', this.findProject.bind(this));
    this.router.get('/editProject', this.editProject.bind(this));    
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
    this.projectController.editProject(req.query.name, req.query.type, req.query.dateStart, req.query.dateEnd, req.query.value, req.query.time, req.query.idStatus, req.query.idProject, function (data) {
      res.json({ "Update": data });
    });
  }

};

module.exports = new ProjectService();
