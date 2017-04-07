let Service = require('./Service');
let AbilityController = require('../controller/AbilityController');

class AbilityService extends Service {

  constructor() {
    super();
    this.path = '/ability';
    this.router.get('/', this.listAbilities.bind(this));
    this.AbilityController = new AbilityController();
  }

  /* GET users listing. */
  listAbilities(req, res, next) {
    this.AbilityController.getListAbilities(function (rows) {
      res.json(rows);
    });
  }

  };

module.exports = new AbilityService();
