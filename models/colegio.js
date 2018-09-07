'use strict';
module.exports = (sequelize, DataTypes) => {
    const Colegio = sequelize.define('COLEGIO', {
        nombre: DataTypes.STRING(80),
        rut: DataTypes.STRING(11),
        direccion: DataTypes.STRING(100),
        telefono: DataTypes.STRING(12),
        estado: DataTypes.BOOLEAN 
    }, {
        tableName: 'COLEGIO',
        underscored: true
    });
    Colegio.associate = function (models) {
        Colegio.hasMany(models.CONTACTO);
        Colegio.hasMany(models.PRODUCTO);
    };
    return Colegio;
};