let Service = require('./Service');
let TaskController = require('../controller/TaskController');

class TaskService extends Service {

  constructor() {
    super();
    this.path = '/task';
    this.router.get('/', this.listTask.bind(this));
    this.router.get('/editTask', this.editTask.bind(this));
    this.router.get('/createTask', this.createTask.bind(this));
    this.taskController = new TaskController();
  }

  listTask(req, res, next) {
    this.taskController.getListTask(function (rows) {
      	res.json(rows);
    });
  }

  createTask(req, res, next){
    this.taskController.createTask(req.query.name, req.query.idStory, function(data){
      res.json({"Insert":data});
    }); 
  }

  editTask(req, res, next){
    this.taskController.editTask(req.query.name, req.query.idTask,function(data){
      res.json({"Update":data});
    });
  }

};

module.exports = new TaskService();