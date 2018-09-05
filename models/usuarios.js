'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define('Usuarios', {
        nombre: DataTypes.STRING(80),
        apellido: DataTypes.STRING(80),
        rut: DataTypes.CHAR(14),
        mail: DataTypes.STRING(100),
        telefono: DataTypes.CHAR(100),
        password: DataTypes.INTEGER(30)
    }, {});
    Usuarios.associate = function(models) {
        // associations can be defined here
        Usuarios.hasMany(Ventas, { as: 'UserVentas' })
    };
    return Usuarios;
};