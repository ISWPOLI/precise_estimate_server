let Service = require('./Service');

class IndexService extends Service {

  constructor() {
    super();
    this.path = '/';
    this.router.get('/', this.index.bind(this));
  }

  index(req, res, next) {
    res.render('index', { title: 'Express' });
  }

};

module.exports = new IndexService();