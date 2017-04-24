let Model = require('./Model');

class Story extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('story', {
            id_story: { type: 'serial', key: true }, // the auto-incrementing primary key
            name: { type: 'text' } ,
            id_feature: { type: 'number'}                       
        });
        this.instance.bind(this);
    }


    findAll(callback){
        this.instance.find({}, 
            function (err, rows) {
            if (err) throw err; // Error al consultar la base de datos
            callback(rows);
        });
    }


    createStory(name, idFeature, callback){
        this.db.driver.execQuery(
          "INSERT INTO story (name, id_feature) VALUES (?,?)",
          [name, idFeature],
          function (err, data) {
            if (err) throw err;
            callback(data);
          }
        )
    }

    editStory(name, idStory, callback){
        this.db.driver.execQuery(
          "UPDATE story SET name = ? WHERE id_story = ?",
          [name,idStory],
          function (err, data) {
            if (err) throw err;
            callback(  data );
          }
        )
    }

    changeSprint(idStory, idSprint, callback) {
        this.db.driver.execQuery(
            "UPDATE story SET id_sprint = ? WHERE id_story = ?",
            [idSprint, idStory],
            function (err, data) {
                if (err) throw err;
                callback(data);
            }
        )
    }

}

module.exports = new Story();    
