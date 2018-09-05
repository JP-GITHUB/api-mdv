'use strict';
module.exports = (sequelize, DataTypes) => {
    const MedioDePago = sequelize.define('MedioDePago', {
        Tipo_MP: DataTypes.STRING(50),


    }, {});
    MedioDePago.associate = function(models) {
        // Asociación con contacto
        MedioDePago.hasMany(Venta, { as: 'Ventas' })
    };
    return MedioDePago;
};