let Controller = require('./Controller');

class RolController extends Controller {

    constructor() {
        super();
        this.rol = require('../model/Rol');
    }

 	getListRoles(callback) {
        this.rol.findAll(function (rows) {
            callback(rows);
        });
    }

    createRol(nameRol, callback){
    	 this.rol.createRol(nameRol, callback);        
    }

    removeRol(idRol, callback){
    	 this.rol.removeRol(idRol, callback);        
    }

    assingValueRolAbility(idRol, idAbility, callback){
    	 this.rol.assingValueRolAbility(idRol, idAbility, callback);        
    }

}


module.exports = RolController;
