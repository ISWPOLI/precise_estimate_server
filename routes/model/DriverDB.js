var orm = require("orm");

var opts = {
  host: 'localhost',
  database: 'precise',
  user: 'precise',
  password: 'precise2017',
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
  try {
    orm.connect(opts, function (err, db) {
      if (err) {
        console.log("ORM Error: ", err);
        return;
      }
      connection = db;
      callback(null, db);
    });
  } catch (e) {
    console.log(e);
  }
};
