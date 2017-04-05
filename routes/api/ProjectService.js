let Service = require('./Service');
let ProjectController = require('../controller/ProjectController');

class ProjectService extends Service {

  constructor() {
    super();
    this.path = '/project';
    this.router.get('/', this.listProject.bind(this));
    this.router.get('/createProject', this.createProject.bind(this));
    this.projectController = new ProjectController();
  }

  /* GET users listing. */
  listProject(req, res, next) {
    this.projectController.getListProject(function (rows) {
      res.json(rows);
    });
  }

  createProject(req, res, next){
    this.projectController.createProject(req.query.name, req.query.type, req.query.dateStart, req.query.dateEnd, req.query.valueEstimate, req.query.timeEstimate, req.query.idStatus, function(data){
      res.json({"Insert":data});
    });
  }

  };

module.exports = new ProjectService();
