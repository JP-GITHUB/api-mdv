'use strict';
module.exports = (sequelize, DataTypes) => {
    const Ventas = sequelize.define('Ventas', {
        Rut_PersonaRetiro: DataTypes.STRING(80),
        Descuento_Venta: DataTypes.INTEGER,
        ValorFinal_Venta: DataTypes.INTEGER,
    }, {
        underscored: true 
    });
    Ventas.associate = function (models) {
        Ventas.belongsTo(models.Comprobantes);
        Ventas.hasMany(models.Contactos, { as: 'PersonaRetiro' });
    };
    return Ventas;
};