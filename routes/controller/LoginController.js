let Controller = require('./Controller');

class LoginController extends Controller {

    constructor() {
        super();
    }

    authenticateUser(inEmail, inPassword, callback) {
        this.database(function (err, db) {
            
            if (err) throw err; // Error al obtener la conexión de la base de datos

            db.models.user.find({ email: inEmail, password: inPassword }, function (err, rows) {
                
                if (err) throw err; // Error al consultar la base de datos
                
                let resp = { st: "Error" };
                if (rows.length > 0) {
                    resp = { st: "ok" };
                }
                callback(resp);
            });
        });
    }
}

module.exports = LoginController;