let Model = require('./Model');

class Epic extends Model {

    constructor() {
        super();
    }

    initialize() {
        this.instance = this.db.define('epic', {
            id_epic: { type: 'serial', key: true }, // the auto-incrementing primary key
            id_profile: { type: 'integer' }                        
        });
        this.instance.bind(this);
    }


    createEpic(name, callback){
        this.db.driver.execQuery(
          "INSERT INTO epic (name) VALUES (?)",
          [name],
          function (err, data) {
            if (err) throw err;
            callback(  data );
          }
        )
    }

}

module.exports = new Epic();    
