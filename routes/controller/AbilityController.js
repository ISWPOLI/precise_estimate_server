let Controller = require('./Controller');

class AbilityController extends Controller {

    constructor() {
        super();
        this.ability = require('../model/Ability');
    }

    getListAbilities(callback) {
        this.ability.findAll(function (rows) {            
            callback(rows);
        });
    }


    }

module.exports = AbilityController;