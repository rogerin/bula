var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var load = require('express-load');
var debug = require('debug')('bulas');



module.exports = function(){
	var app = express();

	app.set('port', (process.env.PORT || 5000));
	// view engine setup
	app.set('views', './app/views');
	app.set('view engine', 'jade');
	


	// uncomment after placing your favicon in /public
	//app.use(favicon(__dirname + '/public/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static('public'));

	load('models', {cwd: 'app'})
	    .then('controllers')
	    .then('routes')
	    .into(app);

	  app.get('*', function(req, res) {
	     res.status(404).json({result:"err", status:404});
	  });

	  return app;
}