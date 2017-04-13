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

    createUser(newUser, callback) {
        newUser.id_user = null;
        let a = this.user.instance.create(newUser, function (err, data) {
            if (err) callback({ st: false })
            else {
                data.password = null;
                data.recovery = null;
                callback({ st: true, data: data });
            }
        });
    }

    updateUser(editUser, callback) {
        this.user.instance.find({ id_user: editUser.id_user }, function (err, rows) {
            if (err) callback({ st: false })
            else {
                rows[0].id_profile = editUser.id_profile;
                rows[0].name = editUser.name;
                rows[0].email = editUser.email;
                rows[0].password = editUser.password;
                rows[0].recovery = editUser.recovery;
                rows[0].save(function (err) {
                    if (err) callback({ st: false })
                    else {
                        callback({ st: true, data: rows });
                    }
                });
            }
        });
    }

    deleteUser(callback) {
        callback({ "st": "ok" });
    }

    assingValueAbility(idUser, idAbility, callback) {
        this.user.assingValueAbility(idUser, idAbility, callback);
    }

    removeValueAbility(idUser, idAbility, callback) {
        this.user.removeValueAbility(idUser, idAbility, callback);
    }

    readRolUser(idUser, callback) {
        this.user.readRolUser(idUser, callback);
    }

    assingProfile(idProfile, idUser, callback) {
        this.user.assingProfile(idProfile, idUser, callback);
    }

}

module.exports = UserController;