var express = require('express');
var models = require('../models');
var router = express.Router();


router.get('/', async function(req, res, next) {

    let usuarios = await models.USUARIO.findAll();
    console.log(usuarios);
    res.json({
        data: usuarios
    });
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