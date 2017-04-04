let Controller = require('./Controller');

class UserController extends Controller {

    constructor() {
        super();
        this.user = require('../model/User');
    }

    getListUsers(callback) {
        this.user.findAll(function (rows) {
            for (var i in rows) {
                rows[i].password = undefined;
                rows[i].recovery = undefined;
            }
            callback(rows);
        });
    }

    assingValueAbility(idUser,idAbility,callback){
        this.user.assingValueAbility(idUser, idAbility, callback);        
    }

    removeValueAbility(idUser, idAbility, callback){
        this.user.removeValueAbility(idUser, idAbility, callback);        
    }

    readRolUser(idUser, callback){
        this.user.readRolUser(idUser,callback);
    }

    assingProfile(idProfile, idUser, callback){
        this.user.assingProfile(idProfile, idUser, callback);
    }

}

module.exports = UserController;