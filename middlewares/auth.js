var jwt = require('jsonwebtoken');

exports.validate = function (req, res, next) {
    var token = req.headers['authorization']
    if (!token) {
        res.status(401).json({
            error: "Es necesario el token de autenticación"
        });
        return;
    }

    token = token.replace('Bearer ', '');

    jwt.verify(token, 'estoesultrasecreto', function (err, user) {
        if (err) {
            res.status(401).json({
                error: 'Token inválido'
            });
        }
    })

    next();
}