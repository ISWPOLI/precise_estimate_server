class Main {

  constructor() {
    this.restPath = '/api';
    this.routers = [];
    this.express = require('express');
    this.path = require('path');
    this.favicon = require('serve-favicon');
    this.logger = require('morgan');
    this.cookieParser = require('cookie-parser');
    this.bodyParser = require('body-parser');

    this.app = this.express();
    this.app.set('views', this.path.join(__dirname, 'views'));
    this.app.set('view engine', 'jade');

    this.app.use(this.favicon(this.path.join(__dirname, 'public', 'favicon.png')));
    this.app.use(this.logger('dev'));
    this.app.use(this.bodyParser.json());
    this.app.use(this.bodyParser.urlencoded({ extended: false }));
    this.app.use(this.cookieParser());
    this.app.use(this.express.static(this.path.join(__dirname, 'public')));

    let index = require('./routes/api/IndexService');
    this.app.use(index.path, index.router);
    this.configServices();

    // catch 404 and forward to error handler
    this.app.use(function (req, res, next) {
      let err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    // error handler
    this.app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });

    module.exports = this.app;
  }

  register(url) {
    let def_class = require(url);
    this.app.use(this.restPath + def_class.path, def_class.router);
  }

  configServices() {
    let services = [
      'LoginService',
      'UserService',
      'ProjectService',
      'RolService',
      'AbilityService'
    ];
    for (let id in services) {
      this.register('./routes/api/' + services[id]);
    }
  }

};

try {
  new Main();
} catch (e) {
  console.log(e);
}
