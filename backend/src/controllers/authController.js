const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
  res.json({ success: true, message: "Register"});
};

exports.login = async (req, res) => {
  res.json({ success: true, message: "Login"});
};
