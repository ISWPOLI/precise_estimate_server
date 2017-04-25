let Controller = require('./Controller');

class FeatureController extends Controller {

    constructor() {
        super();
        this.feature = require('../model/Feature');
    }

    
    createFeature(name, idEpic, callback){
        this.feature.createFeature(name, idEpic, callback);
    }

    editFeature(name, idFeature, callback){
        this.feature.editFeature(name, idFeature, callback);
    }

    removeFeature(idFeature,callback){
        this.feature.removeFeature(idFeature, callback);
    }
    

    
}

module.exports = FeatureController;