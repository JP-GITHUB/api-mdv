'use strict';
module.exports = (sequelize, DataTypes) => {
    const ImagenesProductos = sequelize.define('IMAGENES_PRODUCTOS', {
        IMG_Producto: DataTypes.STRING(255),
    }, {
        underscored: true
    });
    ImagenesProductos.associate = function (models) {

    };
    return ImagenesProductos;
};