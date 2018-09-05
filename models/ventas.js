'use strict';
module.exports = (sequelize, DataTypes) => {
    const Ventas = sequelize.define('VENTAS', {
        rut_retiro: DataTypes.STRING(12),
        nombre_retiro: DataTypes.STRING(80),
        descuento: DataTypes.INTEGER,
        valor_final: DataTypes.INTEGER,
    }, {
        underscored: true 
    });
    Ventas.associate = function (models) {
        Ventas.belongsTo(models.Comprobantes);
        Ventas.hasMany(models.Contactos);
    };
    return Ventas;
};