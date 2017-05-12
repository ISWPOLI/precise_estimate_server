let Service = require('./Service');
let FeatureController = require('../controller/FeatureController');

class FeatureService extends Service {

  constructor() {
    super();
    this.path = '/feature';
    this.router.get('/editFeature', this.editFeature.bind(this));
    this.router.get('/removeFeature', this.removeFeature.bind(this));
    this.router.post('/', this.createFeature.bind(this));
    this.featureController = new FeatureController();
  }

  createFeature(req, res, next){
    this.featureController.createFeature(req.body.name, req.body.idEpic, function(data){
      res.json({"Insert":data});
    }); 
  }

  editFeature(req, res, next){
    this.featureController.editFeature(req.query.name, req.query.idFeature,function(data){
      res.json({"Update":data});
    });
  }

  removeFeature(req, res, next) {
    this.featureController.removeFeature(req.body.idFeature, function (data) {
      res.json({ "Delete": data });
    });
  }

};

module.exports = new FeatureService();