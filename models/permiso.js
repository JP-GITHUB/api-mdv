'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permiso = sequelize.define('PERMISO', {
    nombre: DataTypes.STRING
  }, {
      underscored: true
    });
  Permiso.associate = function (models) {
    Permiso.belongsToMany(models.PERFIL, { through: { model: 'PERFIL_PERMISO' }, foreignkey: 'permiso_id', constraints: true });
  };
  return Permiso;
};