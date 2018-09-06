'use strict';
module.exports = (sequelize, DataTypes) => {
    const Carritos = sequelize.define('CARRITOS', {
        valortotal: DataTypes.INTEGER,
        estado: DataTypes.BOOLEAN,
    }, {
        underscored: true
    });
    
    Carritos.associate = function (models) {
        Carritos.belongsTo(models.Ventas);
        Carritos.belongsToMany(models.Productos, 
            { through: 'PRODUCTOS_CARRITOS', foreignKey: 'carrito_id', contraints: true });
    };
    return Carritos;
};