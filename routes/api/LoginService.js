let Service = require('./Service');
let LoginController = require('../controller/LoginController');

class LoginService extends Service {

  constructor() {
    super();
    this.path = '/login';
    this.router.get('/', this.login.bind(this));
    this.loginController = new LoginController();
  }

  /* GET users listing. */
  login(req, res, next) {
    this.loginController.authenticateUser(req.query.email, req.query.password, function (resp) {
      res.json(resp);
    });
  }

};

module.exports = new LoginService();