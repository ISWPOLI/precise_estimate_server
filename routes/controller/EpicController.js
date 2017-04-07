let Controller = require('./Controller');

class EpicController extends Controller {

    constructor() {
        super();
        this.epic = require('../model/Epic');
    }

    createEpic(name,callback){
        this.epic.createEpic(name, callback);
    }

    
}

module.exports = EpicController;