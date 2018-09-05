'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comprobantes = sequelize.define('Comprobantes', {
        Fecha_Retiro: DataTypes.DATEONLY,
        Estado_Retiro: DataTypes.BOOLEAN,
    }, {
        underscored: true
    });
    Comprobantes.associate = function (models) {
        // Asociación con contacto
    };
    return Comprobantes;
};