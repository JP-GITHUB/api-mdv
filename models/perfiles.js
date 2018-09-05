'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfiles = sequelize.define('PERFILES', {
    nombre: DataTypes.STRING
  }, {
    underscored: true
  });
  Perfiles.associate = function(models) {
    Perfiles.hasMany(models.Usuarios);
    Perfiles.belongsToMany(models.Permisos, 
      {through: {model: 'PERFILES_PERMISOS'}, foreignkey: 'perfil_id', constraints: true}      
    );
  };
  return Perfiles;
};