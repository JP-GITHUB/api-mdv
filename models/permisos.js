'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permisos = sequelize.define('Permisos', {
    nombre: DataTypes.STRING
  }, {});
  Permisos.associate = function(models) {
    // associations can be defined here
  };
  return Permisos;
};