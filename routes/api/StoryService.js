let Service = require('./Service');
let StoryController = require('../controller/StoryController');

class StoryService extends Service {

  constructor() {
    super();
    this.path = '/story';
    this.router.get('/', this.listStory.bind(this));
    this.router.get('/editStory', this.editStory.bind(this));
    this.router.post('/', this.createStory.bind(this));
    this.router.post('/changeSprint', this.changeSprint.bind(this));
    this.router.post('/removeStory', this.removeStory.bind(this));
    this.storyController = new StoryController();
  }

  listStory(req, res, next) {
    this.storyController.getListStory(function (rows) {
      res.json(rows);
    });
  }

  createStory(req, res, next) {
    this.storyController.createStory(req.body.name, req.body.idFeature, function (data) {
      res.json({ "Insert": data });
    });
  }

  editStory(req, res, next) {
    this.storyController.editStory(req.query.name, req.query.idStory, function (data) {
      res.json({ "Update": data });
    });
  }

  changeSprint(req, res, next) {
    this.storyController.changeSprint(req.body.idStory, req.body.idSprint, function (data) {
      res.json({ "Update": data });
    });
  }

  removeStory(req, res, next) {
    this.storyController.removeStory(req.body.idStory, function (data) {
      res.json({ "Delete": data });
    });
  }

};

module.exports = new StoryService();