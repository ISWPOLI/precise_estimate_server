let Controller = require('./Controller');

class StoryController extends Controller {

    constructor() {
        super();
        this.story = require('../model/Story');
    }

    getListStory(callback) {
        this.story.findAll(function (rows) {
            callback(rows);
        });
    }

    createStory(name, idFeature, callback){
        this.story.createStory(name, idFeature, callback);
    }

    editStory(name, idStory, callback){
        this.story.editStory(name, idStory, callback);
    }

    changeSprint(idStory, idSprint, callback) {
        this.story.changeSprint(idStory, idSprint, callback);
    }
    
}

module.exports = StoryController;