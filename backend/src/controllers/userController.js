import { BadRequestError } from "../errors/errors.js";
import { userService } from "../services/userService.js";
import { User } from "../models/User.js";

export const getAllUsers = async (req, res) => {
    let roleUser = req.query.role || null;

    const users = await userService.getAllUsers(roleUser);

    if (!users.success) {
        throw new BadRequestError("Error al obtener los usuarios.");
    }

    res.json({ success: true, data: users.data });
};

export const getUserById = async (req, res) => {
    let userId = req.params.id || null;

    if (!userId) {
        throw new BadRequestError("El ID de usuario es requerido.");
    }

    const user = await userService.getUserById(userId);

    if (!user.success) {
        throw new BadRequestError(user.message);
    }

    res.json({ success: true, data: [user.data] });
};

export const updateUser = async (req, res) => {
    let userId = req.params.id || null;
    const userInfo = new User(req.body);

    const updatedUser = await userService.updateUser(userId, userInfo);

    if (!updatedUser.success) {
        throw new BadRequestError(updatedUser.message);
    }

    res.json({ success: true, message: updatedUser.message });
};