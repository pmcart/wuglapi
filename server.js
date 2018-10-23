var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var http = require('http')
var config = require('./config.json')
// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/mean-app')
//     .then(() => console.log('connection successful'))
//     .catch((err) => console.error(err));

var test = require('./routes/test');
var location = require('./routes/location');
var tag = require('./routes/tag');
var user = require('./routes/user');
var city = require('./routes/city');
var app = express();
app.server = http.createServer(app);

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     //res.header('Access-Control-Expose-Headers', 'Authorization');
//     next();
// });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/test', test);
app.use('/location', location);
app.use('/tag', tag);
app.use('/user', user);
app.use('/city', city);

//app.use(middleware({ config, db }));

	// api router
//app.use('/api', api({ config, db }));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    //var err = new Error('Not Found');
    //err.status = 404;
    //next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    //res.locals.message = err.message;
    //res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    //res.status(err.status || 500);
    //res.render('error');
});

module.exports = app;