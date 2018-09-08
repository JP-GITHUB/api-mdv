var express = require('express');
var models = require('../models');
var middle_auth = require('../middlewares/auth');
var router = express.Router();

router.get('/', middle_auth.validate, async function (req, res, next) {

  let perfiles = await models.PERFIL.findAll();
  res.json({ data: perfiles });
});

router.put('/', async function (req, res, next) {

  models.PERFIL.update(
    { nombre: req.body.nombre }, {
      where: {
        id: req.body.id
      }
    }
  )
    .then(function (rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)

  res.json({});
});

router.post('/', async function (req, res, next) {

  models.PERFIL.create(
    { 
      nombre: req.body.nombre,
      estado: true 
    }
  )
    .then(function (rowCreated) {
      res.json(rowCreated)
    })
    .catch(next)

  res.json({});
});

router.delete('/', async function (req, res, next) {

  models.PERFIL.update(
    { estado: 0 }, {
      where: {
        id: req.body.id
      }
    }
  )
    .then(function (rowsUpdated) {
      res.json(rowsUpdated)
    })
    .catch(next)

  res.json({});
});

module.exports = router;