import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  res.json({ success: true, message: "Register" });
};

export const login = async (req, res) => {
  res.json({ success: true, message: "Login" });
};
