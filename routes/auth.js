var express = require('express');
var jwt = require('jsonwebtoken');
var models = require('../models');
var router = express.Router();

router.post('/login', async function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  let user = await models.USUARIO.findOne({
    attributes: ['id', 'nombre', 'apellido', 'rut', 'mail', 'telefono', 'estado'],
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
  }

  var tokenData = {
    email: email,
    user: user
  }

  var token = jwt.sign(tokenData, 'estoesultrasecreto', {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  })

  res.json({
    status: true,
    token: token,
    user_data: user
  });

});

module.exports = router;
