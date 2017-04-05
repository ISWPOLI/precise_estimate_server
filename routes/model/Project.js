let Model = require('./Model');

class Project extends Model {

    constructor() {
        super();
    }

  initialize() {
      this.instance = this.db.define('project', {
          id_project: { type: 'serial', key: true }, // the auto-incrementing primary key
          name: {type: 'text'},
          type: { type: 'text' },
          date_start: { type: 'text' },
          date_end: { type: 'text' },
          value_estimate_total: { type: 'text' },
          time_estimate_total: { type: 'text' }, 
          id_status: { type: 'number' },
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

    createProject(name, type, dateStart, dateEnd, valueEstimate, timeEstimate, idStatus, callback){
        this.db.driver.execQuery(
          "INSERT INTO project (name, type, date_start, date_end, value_estimate_total, time_estimate_total, id_status) VALUES (?,?,?,?,?,?,?)",
          [name, type, dateStart, dateEnd, valueEstimate, timeEstimate, idStatus],
          function (err, data) {
            if (err) throw err;
            callback(   );
          }
        )
    }
}

module.exports = new Project();    