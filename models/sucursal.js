'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sucursal = sequelize.define('SUCURSAL', {
        nombre: DataTypes.STRING(80),
        direccion: DataTypes.STRING(50),
        telefono: DataTypes.STRING(12),
        estado: DataTypes.BOOLEAN
    }, {
        underscored: true
    });
    Sucursal.associate = function(models) {
        Sucursal.hasMany(models.COLEGIO)
    };
    return Sucursal;
};