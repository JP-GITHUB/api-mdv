'use strict';
module.exports = (sequelize, DataTypes) => {
    const Productos = sequelize.define('Productos', {
        Nombre_Producto: DataTypes.STRING(50),
        Descripcion_Producto: DataTypes.STRING(100),
        Talla_Producto: DataTypes.STRING(3),
        Precio_Producto: DataTypes.INTEGER,

    }, {
        underscored: true
    });
    Productos.associate = function(models) {
        // associations can be defined here
        Productos.hasMany(ImagenProductos, { as: 'IMG_P' }),
            Productos.belongsTo(Stock),
            Productos.belongsToMany(models.Carritos, { through: 'ProductoCarrito', foreignKey: 'producto_id', contraints: true });
    };
    return Productos;
};