'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('USUARIO', {
        nombre: {
            type: DataTypes.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Este campo es obligatorio"
                },
                len: {
                    args: [1, 50],
                    msg: "El campo debe contener un mínimo de 1 y un máximo de 50 caracteres "
                }
            }

        },
        apellido: {
            type: DataTypes.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Este campo es obligatorio"
                },
                len: {
                    args: [1, 50],
                    msg: "El campo debe contener un mínimo de 1 y un máximo de 50 caracteres "
                }
            }

        },
        rut: DataTypes.CHAR(14),
        mail: {
            type: DataTypes.STRING(80),
            allowNull: false,
            validate: {
                isEmail: {
                    msg: "Debe ingresar un correo válido"
                }
            }

        },
        telefono: {
            type: DataTypes.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Este campo es obligatorio"
                },
                len: {
                    args: [8, 8],
                    msg: "El campo debe contener solo 8 números, no incluya + 56 9"
                }
            }

        },
        password: {
            type: DataTypes.STRING(8),
            allowNull: false
        }
    }, {
        instanceMethods: {
            classMethods: {
                generateHash: function(password) {
                    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
                },
            },

            validPassword: function(password) {
                return bcrypt.compareSync(password, this.password)
            }
        },
        estado: DataTypes.BOOLEAN
    }, {
        tableName: 'USUARIO',
        underscored: true
    });


    Usuario.associate = function(models) {
        Usuario.hasMany(models.VENTA);
        Usuario.belongsTo(models.PERFIL, { foreignKey: 'perfil_id' });
    };
    return Usuario;
};