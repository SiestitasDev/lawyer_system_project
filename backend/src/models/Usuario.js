// src/models/Usuario.js
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_rol: { type: DataTypes.INTEGER, allowNull: false },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, {
    tableName: "usuarios",
    timestamps: false,
  });
  return Usuario;
};
