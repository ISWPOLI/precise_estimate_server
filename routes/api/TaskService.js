let Service = require('./Service');
let TaskController = require('../controller/TaskController');

class TaskService extends Service {

  constructor() {
    super();
    this.path = '/task';
    this.router.get('/', this.listTask.bind(this));
    this.router.get('/editTask', this.editTask.bind(this));
    this.router.post('/', this.createTask.bind(this));
    this.router.get('/assingResponsable', this.assingResponsable.bind(this));
    this.router.get('/removeResponsable', this.removeResponsable.bind(this));
    this.router.get('/editResponsable', this.editResponsable.bind(this));
    this.router.get('/getTaskforUser', this.getTaskforUser.bind(this));
    this.router.get('/removeTask', this.removeTask.bind(this));
    this.taskController = new TaskController();
  }

  listTask(req, res, next) {
    this.taskController.getListTask(function (rows) {
      res.json(rows);
    });
  }

  createTask(req, res, next) {
    this.taskController.createTask(req.body.name, req.body.description, req.body.time, req.body.idStory, function (data) {
      res.json({ "Insert": data });
    });
  }

  editTask(req, res, next) {
    this.taskController.editTask(req.query.name, req.query.idTask, function (data) {
      res.json({ "Update": data });
    });
  }

  assingResponsable(req, res, next) {
    this.taskController.assingResponsable(req.query.idUser, req.query.idTask, function (data) {
      res.json({ "Insert": data });
    });
  }

  editResponsable(req, res, next) {
    this.taskController.editResponsable(req.query.idUser, req.query.idTask, function (data) {
      res.json({ "Update": data });
    });
  }

  removeResponsable(req, res, next) {
    this.taskController.removeResponsable(req.query.idUser, req.query.idTask, function (data) {
      res.json({ "Delete": data });
    });
  }

  getTaskforUser(req, res, next) {
    this.taskController.getTaskforUser(req.query.idProject,req.query.idStatus, function (rows) {
      res.json(rows);
    });
  }

  removeTask(req, res, next) {
    this.taskController.removeTask(req.query.idTask, function (data) {
      res.json({ "Delete": data });
    });
  }

};

module.exports = new TaskService();