var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

/*importamos archivos de rutas */
var indexRouter = require('./routes/index');
var schoolsRouter = require('./routes/schools');
var authRouter = require('./routes/auth');
var perfilRouter = require('./routes/perfil');
var usuarioRouter = require('./routes/usuario');

/*instanciamos express*/
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');

/*definimos la ruta inicial y recurso a utilizar*/
app.use('/', indexRouter); /*se inserta recurso que contiene router de express*/
app.use('/schools', schoolsRouter);
app.use('/auth', authRouter);
app.use('/perfiles', perfilRouter);
app.use('/usuarios', usuarioRouter);

module.exports = app;