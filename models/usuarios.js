'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombre: DataTypes.STRING(80),
    apellido: DataTypes.STRING(80),
    rut: DataTypes.CHAR(14),
    mail: DataTypes.STRING(100),
    telefono: DataTypes.CHAR(100),
    password: DataTypes.STRING(50)
  }, {
    underscored: true
  });
  Usuarios.associate = function(models) {
    Usuarios.belongsTo(models.Perfiles, {foreignKey: 'perfile_id'});
  };
  return Usuarios;
};