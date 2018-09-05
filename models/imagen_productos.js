'use strict';
module.exports = (sequelize, DataTypes) => {
    const ImagenProductos = sequelize.define('ImagenProductos', {
        IMG_Producto: DataTypes.STRING(255),
    }, {
        underscored: true
    });
    ImagenProductos.associate = function (models) {

    };
    return ImagenProductos;
};