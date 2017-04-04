let Service = require('./Service');
let UserController = require('../controller/UserController');

class UserService extends Service {

  constructor() {
    super();
    this.path = '/user';
    this.router.get('/', this.listUsers.bind(this));
    this.router.get('/assingAbility', this.assingValueAbility.bind(this));
    this.userController = new UserController();
  }

  /* GET users listing. */
  listUsers(req, res, next) {
    this.userController.getListUsers(function (rows) {
      res.json(rows);
    });
  }

  assingValueAbility(req, res, next){
    this.userController.assingValueAbility(req.query.idUser,req.query.idAbility,function(data){
      res.json({"Insert":data});
    });
  }

};

module.exports = new UserService();
