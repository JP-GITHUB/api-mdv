var express = require('express');
var jwt = require('jsonwebtoken');
var models = require('../models');
var router = express.Router();

router.get('/', async function (req, res, next) {
    let existencias = await models.PRODUCTO_TALLA.findAll({
        include: [models.TALLA, models.PRODUCTO]
    });
    res.json({ data: existencias });

});

router.post('/', async function (req, res, next) {

    models.PRODUCTO_TALLA.create({
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        producto_id: req.body.producto_id,
        talla_id: req.body.talla_id
    })
        .then(function (rowCreated) {
            res.json(rowCreated)
        })
        .catch(next)

    res.json({});
});

router.put('/', async function (req, res, next) {

    models.PRODUCTO_TALLA.update({
        precio: req.body.precio,
        cantidad: req.body.cantidad,
    }, {
            where: {
                producto_id: req.body.producto_id,
                talla_id: req.body.talla_id
            }
        })
        .then(function (rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(next)

    res.json({});
});

module.exports = router;