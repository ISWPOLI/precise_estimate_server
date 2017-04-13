let Service = require('./Service');
let StoryController = require('../controller/StoryController');

class StoryService extends Service {

  constructor() {
    super();
    this.path = '/story';
    this.router.get('/', this.listStory.bind(this));
    this.router.get('/editStory', this.editStory.bind(this));
    this.router.get('/createStory', this.createStory.bind(this));
    this.storyController = new StoryController();
  }

  listStory(req, res, next) {
    this.storyController.getListStory(function (rows) {
      	res.json(rows);
    });
  }

  createStory(req, res, next){
    this.storyController.createStory(req.query.name, req.query.idFeature, function(data){
      res.json({"Insert":data});
    }); 
  }

  editStory(req, res, next){
    this.storyController.editStory(req.query.name, req.query.idStory,function(data){
      res.json({"Update":data});
    });
  }

};

module.exports = new StoryService();