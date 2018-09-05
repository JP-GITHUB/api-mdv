'use strict';
module.exports = (sequelize, DataTypes) => {
    const Contactos = sequelize.define('Contactos', {
        Nombre_Contacto: DataTypes.STRING(80),
        Appat_Contacto: DataTypes.STRING(20),
        Apmat_Contacto: DataTypes.STRING(20),
        Telefono_Contacto: DataTypes.STRING(12),
        Email_Contacto: DataTypes.STRING(50),

    }, {});
    Contactos.associate = function(models) {
        // associations can be defined here
    };
    return Contactos;
};