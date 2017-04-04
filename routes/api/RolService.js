let Service = require('./Service');
let RolController = require('../controller/RolController');

class RolService extends Service {


constructor() {
    super();
    this.path = '/rol';
    this.router.get('/', this.listRoles.bind(this));
    this.router.get('/createRol', this.createRol.bind(this));
    this.router.get('/removeRol', this.removeRol.bind(this));
    this.router.get('/assingValueRolAbility', this.assingValueRolAbility.bind(this));
    this.rolController = new RolController();
  }

    /* GET users listing. */
 listRoles(req, res, next) {
    this.rolController.getListRoles(function (rows) {
      	res.json(rows);
    });
  }

 createRol(req, res, next){
    this.rolController.createRol(req.query.nameRol, function(data){
      res.json({"Insert":data});
    });
  }

  removeRol(req, res, next){
    this.rolController.removeRol(req.query.idRol, function(data){
      res.json({"Delete":data});
    });
  }

  assingValueRolAbility(req, res, next){
    this.rolController.assingValueRolAbility(req.query.idRol, req.query.idAbility, function(data){
      res.json({"Insert":data});
    });
  }



}

module.exports = new RolService();