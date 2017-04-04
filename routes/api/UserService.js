let Service = require('./Service');
let UserController = require('../controller/UserController');

class UserService extends Service {

  constructor() {
    super();
    this.path = '/user';
    this.router.get('/', this.listUsers.bind(this));
    this.router.get('/assingAbility', this.assingValueAbility.bind(this));
    this.router.get('/removeAbility', this.removeValueAbility.bind(this));
    this.router.get('/readRolUser', this.readRolUser.bind(this));
    this.router.get('/assingProfile', this.assingProfile.bind(this));
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

  removeValueAbility(req, res, next){
    this.userController.removeValueAbility(req.query.idUser,req.query.idAbility,function(data){
      res.json({"Delete":data});
    });
  }

  readRolUser(req, res, next){
    this.userController.readRolUser(req.query.idUser, function(rows){
      res.json(rows);
    });
  }

  assingProfile(req, res, next){
    this.userController.assingProfile(req.query.idProfile,req.query.idUser,function(data){
      res.json({"Update":data});
    });
  }
};

module.exports = new UserService();
