let Controller = require('./Controller');

class LoginController extends Controller {

    constructor() {
        super();
        this.user = require('../model/User');
    }

    authenticateUser(inEmail, inPassword, callback) {
        this.user.searchUserByEmailPassword(inEmail, inPassword, function (rows) {
            let resp = { st: "Error" };
            if (rows.length > 0) {
                rows[0].password = null;
                rows[0].recovery = null;
                resp = { st: "ok", data: rows[0] };
            }
            callback(resp);
        });
    }
}

module.exports = LoginController;