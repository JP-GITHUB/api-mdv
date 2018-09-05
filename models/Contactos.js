'use strict';
module.exports = (sequelize, DataTypes) => {
    const Contactos = sequelize.define('CONTACTOS', {
        nombre: DataTypes.STRING(80),
        appat: DataTypes.STRING(20),
        apmat: DataTypes.STRING(20),
        telefono: DataTypes.STRING(12),
        email: DataTypes.STRING(50),
    }, {
        underscored: true
    });
    Contactos.associate = function (models) {

    };
    return Contactos;
};