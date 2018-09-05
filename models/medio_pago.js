'use strict';
module.exports = (sequelize, DataTypes) => {
    const MedioDePago = sequelize.define('MedioDePago', {
        Tipo_MP: DataTypes.STRING(50)
    }, {
        underscored: true
    });
    MedioDePago.associate = function(models) {
        MedioDePago.hasMany(models.Ventas, { as: 'Ventas' })
    };
    return MedioDePago;
};