'use strict';
module.exports = (sequelize, DataTypes) => {
    const Productos = sequelize.define('PRODUCTOS', {
        nombre: DataTypes.STRING(50),
        descripcion: DataTypes.STRING(100),
        talla: DataTypes.STRING(3),
        precio: DataTypes.INTEGER,

    }, {
        underscored: true
    });
    Productos.associate = function(models) {
        // associations can be defined here
        Productos.hasMany(models.ImagenProductos, { as: 'IMG_P' }),
            Productos.belongsTo(models.Cantidad),
            Productos.belongsToMany(models.Carritos, 
                { through: 'PRODUCTOS_CARRITOS', foreignKey: 'producto_id', contraints: true });
    };
    return Productos;
};