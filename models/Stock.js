'use strict';
module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('Stock', {
        Estado_Stock: DataTypes.STRING(20),
        Cantidad_Disponible: DataTypes.INTEGER,

    }, {});
    Stock.associate = function(models) {
        // associations can be defined here
    };
    return Stock;
};