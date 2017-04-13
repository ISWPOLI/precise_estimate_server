let Service = require('./Service');
let FeatureController = require('../controller/FeatureController');

class FeatureService extends Service {

  constructor() {
    super();
    this.path = '/feature';
  //this.router.get('/', this.listProject.bind(this));
    this.router.get('/editFeature', this.editFeature.bind(this));
    this.router.get('/createFeature', this.createFeature.bind(this));
    this.featureController = new FeatureController();
  }

  createFeature(req, res, next){
    this.featureController.createFeature(req.query.name, req.query.idEpic, function(data){
      res.json({"Insert":data});
    }); 
  }

  editFeature(req, res, next){
    this.featureController.editFeature(req.query.name, req.query.idFeature,function(data){
      res.json({"Update":data});
    });
  }

};

module.exports = new FeatureService();