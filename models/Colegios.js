'use strict';
module.exports = (sequelize, DataTypes) => {
    const Colegios = sequelize.define('COLEGIOS', {
        nombre: DataTypes.STRING(80),
        rut: DataTypes.STRING(11),
        direccion: DataTypes.STRING(100),
        telefono: DataTypes.STRING(12),
    }, {
        underscored: true
    });
    Colegios.associate = function (models) {
        Colegios.hasMany(models.Contactos);
        Colegios.hasMany(models.Productos);
    };
    return Colegios;
};