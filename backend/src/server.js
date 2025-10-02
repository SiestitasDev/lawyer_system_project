
require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/auth", authRoutes);

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Modelos sincronizados con MySQL");
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
}).catch(err => {
  console.error("Error al sincronizar modelos:", err);
});
