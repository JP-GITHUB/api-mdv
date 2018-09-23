'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cantidad = sequelize.define('CANTIDAD', {
        cantidad_producto: DataTypes.INTEGER
    }, {
        tableName: 'CANTIDAD',
        underscored: true
    });

    Cantidad.associate = function(models) {
    };
    return Cantidad;
};
