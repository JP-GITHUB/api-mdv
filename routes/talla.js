var express = require('express');
var jwt = require('jsonwebtoken');
var models = require('../models');
var router = express.Router();

router.get('/', async function (req, res, next) {
    let tallas = await models.TALLA.findAll();

    //mientras no filtro por el estado del producto pues asumo que mejor traer todo y filtrar en la vista
    if (tallas === null) {
        res.json({
            status: false,
            msg: 'no hay tallas para mostrar'
        });
        return;
    }

    res.json({
        status: true,
        data: tallas
    });

});

module.exports = router;