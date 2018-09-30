var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', async function (req, res, next) {
  let schools = await models.COLEGIO.findAll();
  res.json({ status: true, data: schools });
});

module.exports = router;
