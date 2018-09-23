'use strict';
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('PRODUCTO', {
        nombre: DataTypes.STRING(50),
        descripcion: DataTypes.STRING(100),
        talla: DataTypes.STRING(3),
        precio: DataTypes.INTEGER,
        cantidad: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN
    }, {
            tableName: 'PRODUCTO',
            underscored: true
        });
    Producto.associate = function (models) {
        Producto.hasMany(models.IMAGEN_PRODUCTO);
        Producto.belongsTo(models.CANTIDAD);
        Producto.belongsToMany(models.CARRITO, { through: models.PRODUCTO_CARRITO, foreignKey: 'producto_id', contraints: true });
    };
    return Producto;
};