'use strict';
module.exports = (sequelize, DataTypes) => {
    const ImagenProductos = sequelize.define('ImagenProductos', {
        IMG_Producto: DataTypes.STRING(255),


    }, {});
    ImagenProductos.associate = function(models) {
        // associations can be defined here
    };
    return ImagenProductos;
};