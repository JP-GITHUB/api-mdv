'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfiles = sequelize.define('Perfiles', {
    nombre: DataTypes.STRING
  }, {});
  Perfiles.associate = function(models) {
    // associations can be defined here
  };
  return Perfiles;
};