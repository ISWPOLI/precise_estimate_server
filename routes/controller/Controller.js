class Controller {

    constructor() {
        this.conn = require('../model/DriverDB');
    }

    database(callback) {
        this.conn(callback);
    }
}

module.exports = Controller;