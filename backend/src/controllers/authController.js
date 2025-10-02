const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");

const Usuario = db.Usuario;
const Rol = db.Rol;

exports.register = async (req, res) => {
  try {
    const {name, email, password, id_rol } = req.body;

    const existe = await Usuario.findOne({ where: { email } });
    if (existe) return res.status(400).json({ message: "El correo ya está registrado" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await Usuario.create({
      email,
      nombre: name,
      password: hashedPassword,
      id_rol,
    });

    res.status(201).json({ message: "Usuario registrado con éxito", success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ where: { email }, include: Rol });
    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) return res.status(401).json({ message: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: usuario.id_usuario, name: usuario.nombre, rol: usuario.Rol.nombre_rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ success: true, token_type: "Bearer", expires_in: 3600, access_token: token});
  } catch (err) {
    res.status(500).json({ success: false, error: err.message});
  }
};
