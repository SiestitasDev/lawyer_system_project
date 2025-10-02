const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Usuario = require("./Usuario")(sequelize, DataTypes);
const Rol = require("./Rol")(sequelize, DataTypes);

Rol.hasMany(Usuario, { foreignKey: "id_rol" });
Usuario.belongsTo(Rol, { foreignKey: "id_rol" });

module.exports = {
  sequelize,
  Usuario,
  Rol,
};
