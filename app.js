var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var schoolsRouter = require('./routes/schools');
var authRouter = require('./routes/auth');
var perfilRouter = require('./routes/perfil');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/schools', schoolsRouter);
app.use('/auth', authRouter);
app.use('/perfiles', perfilRouter);

module.exports = app;
