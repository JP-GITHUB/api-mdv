'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductoTalla = sequelize.define('PRODUCTO_TALLA', {
    precio: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
      tableName: 'PRODUCTO_TALLA',
      underscored: true
    });
  ProductoTalla.associate = function (models) {
    ProductoTalla.belongsTo(models.PRODUCTO, { foreignKey: 'producto_id' });
    ProductoTalla.belongsTo(models.TALLA, { foreignKey: 'talla_id' });
  };
  return ProductoTalla;
};