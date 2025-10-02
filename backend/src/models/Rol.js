// src/models/Rol.js
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define("Rol", {
    id_rol: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre_rol: {
      type: DataTypes.ENUM("Administrador", "Abogado", "Cliente"),
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: "roles",
    timestamps: false,
  });
  return Rol;
};
