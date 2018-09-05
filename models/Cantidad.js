'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cantidad = sequelize.define('CANTIDAD', {
        Estado_Stock: DataTypes.STRING(20),
        Cantidad_Disponible: DataTypes.INTEGER
    }, {
        underscored: true
    });
    Cantidad.associate = function(models) {

    };
    return Cantidad;
};