import { User } from "../models/User.js";
import { userService } from "../services/userService.js";

export const Register = async (req, res) => {
    const userInfo = new User(req.body);

    const { success, missingFields } = userInfo.validateFields();
    
    if (!success) {
        return res.status(400).json({
            success: false,
            message: "Faltan campos obligatorios",
            detail: missingFields,
        });
    }

    const existingUser = await userService.getUserByEmail(userInfo.email);

    if (existingUser.success) {
        return res.status(400).json({
            success: false,
            message: "El usuario ya existe.",
        });
    }

    const creationResult = await userService.createUser(userInfo);

    if (!creationResult.success) {
        return res.status(500).json({
            success: false,
            message: "Error al crear el usuario.",
        });
    }

	res.json({ success: true, message: "Registro exitoso" });
};

export const Login = async (req, res) => {
	res.json({ success: true, message: "Login" });
};