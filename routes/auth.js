var express = require('express');
var jwt = require('jsonwebtoken');
var models = require('../models');
var router = express.Router();

router.post('/login', async function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  let user = await models.USUARIO.findOne({
    where: {
      mail: email,
      password: password
    }
  }); 

  console.log(user)

  if(user === null){
    res.json({status: false, msg: 'Las credenciales son inválidas'});
    return;
  }

  var tokenData = {
    email: email
    // DATA
  }
 
  var token = jwt.sign(tokenData, 'estoesultrasecreto', {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  })
 
  res.json({
    status: true,
    token: token
  });

});

module.exports = router;
