'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sucursales = sequelize.define('Sucursales', {
        Nombre_Scursal: DataTypes.STRING(80),
        Direccion_Sucursal: DataTypes.STRING(50),
        Telefono_Sucursal: DataTypes.STRING(12)
    }, {
        underscored: true
    });
    Sucursales.associate = function(models) {
        Sucursales.hasMany(models.Colegios, { as: 'Colegios' })
    };
    return Sucursales;
};