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
}

module.exports = UserController;