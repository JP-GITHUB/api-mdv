'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permisos = sequelize.define('Permisos', {
    nombre: DataTypes.STRING
  }, {
      underscored: true
    });
  Permisos.associate = function (models) {
    Permisos.belongsToMany(models.Perfiles,
      { through: { model: 'PerfilesPermisos' }, foreignkey: 'permiso_id', constraints: true }
    );
  };
  return Permisos;
};