'use strict';
module.exports = (sequelize, DataTypes) => {
    const Carritos = sequelize.define('Carritos', {
        ValorTotal_carrito: DataTypes.INTEGER,
        Estado_Carrito: DataTypes.BOOLEAN,
    }, {
        underscored: true
    });
    Carritos.associate = function (models) {
        // associations can be defined here
        Carritos.belongsTo(Venta)
    };
    return Carritos;
};