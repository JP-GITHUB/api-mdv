var express = require('express');
var jwt = require('jsonwebtoken');
var models = require('../models');
var router = express.Router();

router.get('/', async function (req, res, next) {
    let productos = await models.PRODUCTO.findAll();
    res.json({data: productos});

});

router.get('/:colegio_id', async function (req, res, next) {
    let productos = await models.PRODUCTO.findAll({
        where: {
            colegio_id: req.params.colegio_id
        },
        include: [models.TALLA]
    });

    if (productos === null) {
        res.json({
            status: false,
            msg: 'no hay productos para mostrar'
        });
        return;
    }

    res.json({
        status: true,
        obj: productos
    });

});

router.post('/', async function (req, res, next) {

    models.PRODUCTO.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            estado: true
        })
        .then(function (rowCreated) {
            res.json(rowCreated)
        })
        .catch(next)

    res.json({});
});

router.put('/', async function (req, res, next) {

    models.PRODUCTO.update({
            nombre: req.body.nombre,
            descripcion: req.bode.descripcion
        }, {
            where: {
                id: req.body.id
            }
        })
        .then(function (rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(next)

    res.json({});
});

router.put('/cantidad', async function (req, res, next) {

    models.PRODUCTO.update({
            cantidad: req.bode.cantidad
        }, {
            where: {
                id: req.body.id
            }
        })
        .then(function (rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(next)

    res.json({});
});

router.delete('/', async function (req, res, next) {

    models.PRODUCTO.update({
            estado: 0
        }, {
            where: {
                id: req.body.id
            }
        })
        .then(function (rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(next)

    res.json({});
});

module.exports = router;