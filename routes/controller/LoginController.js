let Controller = require('./Controller');

class LoginController extends Controller {

    constructor() {
        super();
        this.user = require('../model/User');
    }

    authenticateUser(inEmail, inPassword, callback) {
        this.user.searchUserByEmailPassword(inEmail, inPassword, function(rows){
            let resp = { st: "Error" };
            if (rows.length > 0) {
                resp = { st: "ok" };
            }
            callback(resp);
        });
    }
}

module.exports = LoginController;