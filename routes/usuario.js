var express = require('express');
var models = require('../models');
var router = express.Router();

router.get('/', async function (req, res, next) {

  let usuarios = await models.USUARIO.findAll();
  res.json({ data: usuarios });
});

router.put('/', async function (req, res, next) {

  models.USUARIO.update(
    {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      rut: req.body.rut,
      mail: req.body.mail,
      telefono: req.body.telefono,
      password: req.body.password
    }, {
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

router.delete('/', async function (req, res, next) {

  models.USUARIO.update(
    {
      estado: 0
    }, {
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