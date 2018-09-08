var express = require('express');
var models = require('../models');
var middle_auth = require('../middlewares/auth');
var router = express.Router();

router.get('/', middle_auth.validate, async function(req, res, next) {

    let usuarios = await models.USUARIO.findAll();
    res.json({ data: usuarios });
});

router.put('/', async function(req, res, next) {

    models.USUARIO.update({
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
        })
        .then(function(rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(err => {
            res.json({status: false, msg, err});
        })
});

router.delete('/', async function(req, res, next) {

    models.USUARIO.update({
            estado: 0
        }, {
            where: {
                id: req.body.id
            }
        })
        .then(function(rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(next)

    res.json({});
});

router.post('/register', async function(req, res, next) {
    let data = req.body;
    let user_data = {
        nombre: data.nombre,
        apellido: data.apellido,
        rut: data.run,
        mail: data.email,
        telefono: data.telefono,
        password: data.password,
    };

    models.USUARIO
        .findOrCreate({ // Busca el usuario si existe por rut
            where: {

                mail: user_data.mail
            },
            defaults: user_data // Data que insertara si es que no existe
        })
        .spread((user, created) => {
            // Bloque que se ejecuta despues de la accion si se creo o se encontro.
            if (created == true) {
                console.log("Usuario creado exitosamente");
            } else {
                console.log("Usuario ya existe en nuestros registros")
            }

            // Como lo creo o ya existia lo trae y lo muestra
            console.log(user.get({
                plain: true
            }))
            console.log(created)

        })

});


module.exports = router;