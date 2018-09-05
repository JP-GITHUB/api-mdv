'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfiles = sequelize.define('Perfiles', {
    nombre: DataTypes.STRING
  }, {
    underscored: true
  });
  Perfiles.associate = function(models) {
    Perfiles.hasMany(models.Usuarios);
    Perfiles.belongsToMany(models.Permisos, 
      {through: {model: 'PerfilesPermisos'}, foreignkey: 'permile_id', constraints: true}      
    );
  };
  return Perfiles;
};