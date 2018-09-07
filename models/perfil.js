'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfil = sequelize.define('PERFIL', {
    nombre: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {
    tableName: 'PERFIL',
    underscored: true
  });
  Perfil.associate = function(models) {
    Perfil.hasMany(models.USUARIO);
    Perfil.belongsToMany(models.PERMISO, {through: {model: 'PERFIL_PERMISO'}, foreignkey: 'perfil_id', constraints: true});
  };
  return Perfil;
};