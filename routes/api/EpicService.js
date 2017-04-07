let Service = require('./Service');
let EpicController = require('../controller/EpicController');

class EpicService extends Service {

  constructor() {
    super();
    this.path = '/epic';
  //this.router.get('/', this.listProject.bind(this));
    this.router.get('/createEpic', this.createEpic.bind(this));
    this.epicController = new EpicController();
  }

createEpic(req, res, next){
    this.epicController.createEpic(req.query.name, function(data){
      res.json({"Insert":data});
    }); 
  }
};

module.exports = new EpicService();