var express = require('express');
var models = require('../models');
var router = express.Router();

router.get('/', async function(req, res, next) {

  let perfiles = await models.PERFIL.findAll();  
  res.json({data: perfiles});
});

module.exports = router;
