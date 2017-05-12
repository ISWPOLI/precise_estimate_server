let Service = require('./Service');
let EpicController = require('../controller/EpicController');

class EpicService extends Service {

  constructor() {
    super();
    this.path = '/epic';
    this.router.get('/', this.getListEpic.bind(this));
    this.router.post('/', this.createEpic.bind(this));
    this.router.post('/editEpic', this.editEpic.bind(this));    
    this.router.post('/removeEpic', this.removeEpic.bind(this));        
    this.epicController = new EpicController();
  }


   getListEpic(req, res, next) {
    this.epicController.getListEpic(function (rows) {
      res.json(rows);
    });
  }

  createEpic(req, res, next){
    this.epicController.createEpic(req.body.name, req.body.idProject, function(data){
      res.json({"Insert":data});
    }); 
  }

  editEpic(req, res, next){
    this.epicController.editEpic(req.query.name, req.query.idEpic, function(data){
      res.json({"Update": data});
    });
  }

  removeEpic(req, res, next) {
    this.epicController.removeEpic(req.body.idEpic, function (data) {
      res.json({ "Delete": data });
    });
  }

};

module.exports = new EpicService();