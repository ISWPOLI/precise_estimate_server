var orm = require("orm");

var connections = {};

function setup(db) {
  var User = db.define('user', {
    id_user:  {type: 'serial', key: true}, // the auto-incrementing primary key
    name:     {type: 'text'},
    email:    {type: 'text'},
    password: {type: 'text'},
    recovery: {type: 'text'}
  }, {
    methods : {
    }
  });
}

module.exports = function(host, database, cb) {
  if (connections[host] && connections[host][database]) {
    cb(null, connections[host][database]);
    return;
  }
  var opts = {
    host:     'localhost',
    database: 'precise',
    user:     'root',
    password: 'apps123mysql',
    protocol: 'mysql',
    port:     '3306',
    query:    {pool: true}
  };
  orm.connect(opts, function(err, db) {
    if (err) return cb(err);
    connections[host] = connections[host] || {};
    connections[host][database] = db;
    setup(db);
    cb(null, db);
  });
};
