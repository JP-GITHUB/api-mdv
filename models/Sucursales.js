'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sucursales = sequelize.define('SUCURSALES', {
        nombre: DataTypes.STRING(80),
        direccion: DataTypes.STRING(50),
        telefono: DataTypes.STRING(12)
    }, {
        underscored: true
    });
    Sucursales.associate = function(models) {
        Sucursales.hasMany(models.Colegios)
    };
    return Sucursales;
};