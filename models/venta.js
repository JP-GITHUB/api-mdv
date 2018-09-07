'use strict';
module.exports = (sequelize, DataTypes) => {
    const Venta = sequelize.define('VENTA', {
        rut_retiro: DataTypes.STRING(12),
        nombre_retiro: DataTypes.STRING(80),
        descuento: DataTypes.INTEGER,
        valor_final: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    }, {
        underscored: true 
    });
    
    Venta.associate = function (models) {
        Venta.belongsTo(models.COMPROBANTE);
        //Venta.hasMany(models.CONTACTO);
    };
    return Venta;
};