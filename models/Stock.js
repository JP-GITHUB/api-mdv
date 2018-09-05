'use strict';
module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('Stock', {
        Estado_Stock: DataTypes.STRING(20),
        Cantidad_Disponible: DataTypes.INTEGER
    }, {
        underscored: true
    });
    Stock.associate = function(models) {

    };
    return Stock;
};