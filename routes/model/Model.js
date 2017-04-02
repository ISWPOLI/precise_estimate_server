class Model {

    constructor() {
        this.conn = require('../model/DriverDB');
        this.conn(this.setDBIntace.bind(this));
    }

    setDBIntace(err, db) {
        if (err) throw err; // Error al obtener la conexión de la base de datos
        this.db = db;
        this.initialize();
    }

    initialize(){}

}

module.exports = Model;