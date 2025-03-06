var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

var missionRouter = require('./routes/missionDetails');
var planetRouter = require('./routes/planetdetials');
var discoveryRouter = require('./routes/discoveriesdetails');

var indexRouter = require('./routes/index');

var app = express();
mongoose.connect('mongodb://localhost:27017/Database')
    .then(() => { console.log('Database connected sucessfully') })
    .catch(err => console.log(err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())

require('dotenv').config()


// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/Database', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/missions', missionRouter);
app.use('/planets', planetRouter);
app.use('/discoveries', discoveryRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404, 'API Not Found'));
});

// Error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        error: req.app.get('env') === 'development' ? err : {}
    });
});

module.exports = app;