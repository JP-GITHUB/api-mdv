'use strict';
module.exports = (sequelize, DataTypes) => {
    const MedioDePago = sequelize.define('MEDIO_DE_PAGO', {
        tipo_mp: DataTypes.STRING(50)
    }, {
        underscored: true
    });
    MedioDePago.associate = function(models) {
        MedioDePago.hasMany(models.VENTA)
    };
    return MedioDePago;
};