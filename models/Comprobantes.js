'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comprobantes = sequelize.define('COMPROBANTES', {
        fecha_retiro: DataTypes.DATEONLY,
        estado_retiro: DataTypes.BOOLEAN,
    }, {
        underscored: true
    });
    Comprobantes.associate = function (models) {
        // Asociación con contacto
    };
    return Comprobantes;
};