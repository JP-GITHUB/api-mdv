var express = require('express');
var jwt = require('jsonwebtoken');
var models = require('../models');
var router = express.Router();

router.post('/product', async function (req, res, next) {
    let token = req.body.token;
    //asumo que hay que enviar algo para verificar que un admin esta solicitando los productos
    //por eso ese token que nose que cresta manda asi que le puse token xD
    let productos = await models.PRODUCTOS.findAll();

    //mientras no filtro por el estado del producto pues asumo que mejor traer todo y filtrar en la vista
    if (productos === null) {
        res.json({ status: false, msg: 'no hay productos para mostrar' });
        return;
    }

    /*
    var tokenData = {
        email: email
        // DATA
    }

    var token = jwt.sign(tokenData, 'estoesultrasecreto', {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    })

    res.json({
        status: true,
        token: token
    });
    */
    res.json({
        status: true,
        obj: productos
    });

});

module.exports = router;