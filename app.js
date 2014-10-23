console.log('\n\n\n\n\n\n\n\n\n<<<<<<<<<< ------------------ sisk START ------------------------ >>>>>>>>>');

var express         = require('express');
var app             = express();
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var router          = express.Router();
var swig            = require('swig');
var port            = process.env.PORT || 8888;

app.use(morgan('dev'));         // log every request to the console
app.use(bodyParser());          // get information from html forms
app.use(express.static(__dirname + '/public')); // Static (public) folder
app.use('/', router);           // app.use('/parent', router); - call all from localhost:8888/parent/*

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

require('./routes.js')(app,  router); // load our routes and pass in our app and fully configured passport

app.listen(port);
console.log( 'Run on port ' + port);