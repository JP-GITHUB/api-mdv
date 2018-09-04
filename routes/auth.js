var express = require('express');
var jwt = require('jsonwebtoken')
var router = express.Router();

router.post('/login', function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  if(!(username == 'admin' && password == 'admin')){
    res.json({status: false, msg: 'Las credenciales son inválidas'});
    return;
  }

  var tokenData = {
    username: username
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
