'use strict';
module.exports = (sequelize, DataTypes) => {
    const Carritos = sequelize.define('Carritos', {
        ValorTotal_carrito: DataTypes.INTEGER,
        Estado_Carrito: DataTypes.BOOLEAN,
    }, {
        underscored: true
    });
    
    Carritos.associate = function (models) {
        Carritos.belongsTo(models.Ventas)
    };
    return Carritos;
};