class Service {

    constructor() {
        this.express = require('express');
        this.router = this.express.Router();
        this.util = require('util');
    }

    setCors(cors){
        this.cors = cors;
    }

}

module.exports = Service;