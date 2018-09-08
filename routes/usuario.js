var express = require('express');
var models = require('../models');
var middle_auth = require('../middlewares/auth');
var router = express.Router();

router.get('/', middle_auth.validate, async function (req, res, next) {

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
            password: req.body.password,
            perfil_id: req.body.perfil
        }, {
            where: {
                id: req.body.id
            }
        }
    )
        .then(function (rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(err => {
            res.json({ status: false, msg, err });
        })
});

router.delete('/', async function (req, res, next) {

    models.USUARIO.update({
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

router.post('/register', async function (req, res, next) {
    let data = req.body;
    let user_data = {
        nombre: data.nombre,
        apellido: data.apellido,
        rut: data.run,
        mail: data.email,
        telefono: data.telefono,
        password: data.password,
        estado: true
    };

    if(user_data.nombre == null || user_data.nombre == "" || user_data.apellido == null || user_data.apellido == "" || user_data.rut == null || user_data.rut == ""
    || user_data.mail == null || user_data.mail == "" || user_data.telefono == null || user_data.telefono == "" || user_data.password == null || user_data.password == ""){
        res.json({
            status: false
        });
        return;
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

        }).catch(err => {
            console.log(err);
        })

});

router.post('/forgot_password', function (req, res) {
    let email = req.body.email;

    if (email === "" || !email) {
        return res.json({ status: false, msg: 'Error al enviar el correo' });
    }

    const sgMail = require('@sendgrid/mail');
    const random_hash = require('random-hash');

    let tmp_pass = random_hash.generateHash({ length: 20 });

    sgMail.setApiKey('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');
    const msg = {
        to: email,
        from: 'contacto@mdv.com',
        subject: 'Password provisoria MDV Express',
        text: 'Se ha generado una password provisoria para ingresar a tu cuenta : "' + tmp_pass + '" [No olvides cambiarla por una personalizada].',
    };

    let response = sgMail.send(msg);
    response.then(result => {
        models.USUARIO.update({
            password: tmp_pass
        }, {
                where: {
                    mail: email
                }
            })
            .then(function (rowsUpdated) {

            })
            .catch(err => {
                return res.json({ status: false, code: 2 })
            });

        return res.json({ status: true, msg: 'Correo enviado' });
    });

    response.catch(err => {
        console.log(err);
        return res.json({ status: false, msg: 'Error al enviar el correo' });
    });

});

router.post('/change_password', function (req, res) {
    let mail = req.body.mail;
    let old_pass = req.body.old_pass;
    let new_pass = req.body.new_pass;
    let new_pass_confirm = req.body.new_pass_confirm;

    if (new_pass !== new_pass_confirm) {
        res.json({ status: false, msg: 'No coinciden las contraseñas' });
    } else {
        models.USUARIO.update({
            password: new_pass
        }, {
                where: {
                    mail: mail,
                    password: old_pass
                }
            })
            .then(function (rowsUpdated) {
                return res.json({ status: true, msg: 'Se actualizo correctamente' });
            })
            .catch(err => {
                return res.json({ status: false, code: 2 })
            });
    }
});

module.exports = router;