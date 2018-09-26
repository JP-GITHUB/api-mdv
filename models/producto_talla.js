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
  };
  return ProductoTalla;
};