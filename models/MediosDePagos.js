'use strict';
module.exports = (sequelize, DataTypes) => {
    const MediosDePagos = sequelize.define('MEDIOS_DE_PAGOS', {
        tipo_mp: DataTypes.STRING(50)
    }, {
        underscored: true
    });
    MedioDePago.associate = function(models) {
        MediosDePagos.hasMany(models.Ventas, { as: 'Ventas' })
    };
    return MedioDePago;
};