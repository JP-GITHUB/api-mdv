'use strict';
module.exports = (sequelize, DataTypes) => {
    const Colegios = sequelize.define('Colegios', {
        Nombre_Colegio: DataTypes.STRING(80),
        Rut_Colegio: DataTypes.STRING(11),
        Direccion_Colegio: DataTypes.STRING(100),
        Telefono_Colegio: DataTypes.STRING(12),
    }, {});
    Colegios.associate = function(models) {
        // associations can be defined here
        Colegios.hasMany(Contactos, { as: 'Contacto' }),
            Colegios.hasMany(Productos, { as: 'Producto' })
    };
    return Colegios;
};