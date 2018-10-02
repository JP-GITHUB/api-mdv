var express = require('express');
var jwt = require('jsonwebtoken');
var models = require('../models');
var router = express.Router();

router.post('/login', async function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  let user = await models.USUARIO.findOne({
    attributes: ['id', 'nombre', 'apellido', 'rut', 'mail', 'estado'],
    where: {
      mail: email,
      password: password
    },
    include: [{
      model: models.PERFIL,
      attributes: ['id', 'nombre']
    }]
  });

  if (user === null) {
    res.json({ status: false, msg: 'Las credenciales son inválidas' });
    return;
  } else {
    if (user.estado == false) {
      res.json({ status: false, msg: 'El usuario se encuentra en estado deshabilitado' });
      return;
    }
  }

  var tokenData = {
    email: email,
    user: user
  }

  var token = jwt.sign(tokenData, 'estoesultrasecreto', {
    expiresIn: '20m'
  })

  res.json({
    status: true,
    token: token,
    user_data: user
  });

});

router.post('/login', async function (req, res, next) {
  var token = req.headers['authorization']
  if (!token) {
    res.status(401).json({
      error: "Es necesario el token de autenticación"
    });
    return;
  }

  token = token.replace('Bearer ', '');

  jwt.verify(token, 'estoesultrasecreto', function (err, user) {
    if (err) {
      res.status(401).json({
        error: 'Token inválido'
      });
    } else {
      res.json({
        message: 'Token válido'
      });
    }
  })
});


module.exports = router;
