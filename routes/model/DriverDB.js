var orm = require("orm");

var opts = {
  host: 'localhost',
  database: 'precise',
  user: 'root',
  password: 'apps123mysql',
  protocol: 'mysql',
  port: '3306',
  query: { pool: true }
};

var connection = null;

module.exports = function (callback) {
  if (connection != null) {
    callback(null, connection);
    return;
  }

  orm.connect(opts, function (err, db) {
    if (err) return callback(err);
    connection = db;
    callback(null, db);
  });
};
