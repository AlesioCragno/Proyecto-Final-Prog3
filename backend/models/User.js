const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 255]
      }
    }
  }, {
    tableName: 'users',
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        try {
          const saltRounds = 10;
          const contrasenaHasheada = await bcrypt.hash(user.password, saltRounds); //Hashea la contraseña antes de guardar el usuario.
          return contrasenaHasheada;
        } catch (error) {
          console.error("Error. No se puede hashear la contraseña", error);
        }
      }
    }
  });

  User.prototype.validarPassword = async function (password) {
    // TODO: Comparar la contraseña recibida con el hash almacenado.
    // Pista: usar bcrypt.compare()
  };

  User.prototype.toJSON = function () {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };

  return User;
};
