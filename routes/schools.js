var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', async function (req, res, next) {
  let schools = await models.COLEGIO.findAll();
  res.json({ status: true, data: schools });
});

router.post('/', async function (req, res, next) {

  try {
    let colegio = await models.COLEGIO.findOne({
      where: { nombre: req.body.nombre }
    });

    if (!colegio) {
      let status_insert = await models.COLEGIO.create({
        nombre: req.body.nombre,
        rut: req.body.rut,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        estado: 1,
        sucursal_id: req.body.sucursal
      });

      if (status_insert) {
        res.json({ status: true, msg: 'Colegio insertado correctamente.' });
        return;
      } else {
        res.json({ status: false, msg: 'Colegio no pudo ser insertado.' });
        return;
      }
    } else {
      res.json({ status: false, msg: 'Colegio ya existe.' });
      return;
    }
  } catch (error) {
    console.log(error);
    res.json({ status: false, msg: 'Colegio no pudo ser insertado.' });
    return;
  }
});


module.exports = router;
