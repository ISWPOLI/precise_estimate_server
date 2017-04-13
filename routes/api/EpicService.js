let Service = require('./Service');
let EpicController = require('../controller/EpicController');

class EpicService extends Service {

  constructor() {
    super();
    this.path = '/epic';
    this.router.get('/', this.getListEpic.bind(this));
    this.router.get('/createEpic', this.createEpic.bind(this));
    this.router.get('/editEpic', this.editEpic.bind(this));    
    this.epicController = new EpicController();
  }


   getListEpic(req, res, next) {
    this.epicController.getListEpic(function (rows) {
      res.json(rows);
    });
  }

  createEpic(req, res, next){
    this.epicController.createEpic(req.query.name, function(data){
      res.json({"Insert":data});
    }); 
  }

  editEpic(req, res, next){
    this.epicController.editEpic(req.query.name, req.query.idEpic, function(data){
      res.json({"Update": data});
    });
  }

};

module.exports = new EpicService();