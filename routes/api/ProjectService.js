let Service = require('./Service');

class ProjectService extends Service {

  constructor() {
    super();
    this.path = '/project';
    this.router.get('/', this.listProjectEpic.bind(this));
  }

  /* GET users listing. */
  listProjectEpic(req, res, next) {
    this.database(function (err, db) {
      database('localhost', 'precise', function (err, db) {
        if (err) throw err;
        db.models.vw_project_epic.find({}, function (err, rows) {
          if (err) throw err;
          res.json(rows);
        });
      });
    });
  }

};

module.exports = new ProjectService();
