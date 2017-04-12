let Controller = require('./Controller');

class FeatureController extends Controller {

    constructor() {
        super();
        this.feature = require('../model/Feature');
    }

    createFeature(name, idFeature, callback){
        this.feature.createFeature(name, idFeature, callback);
    }

    editFeature(name, idFeature, callback){
        this.feature.editFeature(name, idFeature, callback);
    }

    
}

module.exports = FeatureController;