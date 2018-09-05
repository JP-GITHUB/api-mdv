'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sucursales = sequelize.define('Sucursales', {
        Nombre_Scursal: DataTypes.STRING(80),
        Direccion_Sucursal: DataTypes.STRING(50),
        Telefono_Sucursal: DataTypes.STRING(12)

    }, {});
    Sucursales.associate = function(models) {
        // associations can be defined here
        Sucursales.hasMany(Colegios, { as: 'Colegios' })
    };
    return Sucursales;
};