'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comprobante = sequelize.define('COMPROBANTE', {
        fecha_retiro: DataTypes.DATEONLY,
        estado_retiro: DataTypes.BOOLEAN
    }, {
        underscored: true
    });
    Comprobante.associate = function (models) {
        // Asociación con contacto
    };
    return Comprobante;
};