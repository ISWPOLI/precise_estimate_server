let Model = require('./Model');

class Feature extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('feature', {
            id_feature: { type: 'serial', key: true }, // the auto-incrementing primary key
            name: { type: 'text' } ,
            id_epic: { type: 'number'}                       
        });
        this.instance.bind(this);
    }


    createFeature(name, idEpic, callback){
        this.db.driver.execQuery(
          "INSERT INTO feature (name, id_epic) VALUES (?,?)",
          [name, idEpic],
          function (err, data) {
            if (err) throw err;
            callback(data);
          }
        )
    }

    editFeature(name, idFeature, callback){
        this.db.driver.execQuery(
          "UPDATE feature SET name = ? WHERE id_feature = ?",
          [name,idFeature],
          function (err, data) {
            if (err) throw err;
            callback(  data );
          }
        )
    }

}

module.exports = new Feature();    
