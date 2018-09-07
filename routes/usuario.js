var express = require('express');
var models = require('../models');
var router = express.Router();

router.get('/', async function(req, res, next) {

  let usuarios = await models.USUARIO.findAll(); 
  res.json({data: usuarios});
});

module.exports = router;