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

};

module.exports = new ProjectService();
