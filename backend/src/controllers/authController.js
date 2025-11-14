import { User } from "../models/User.js";
import { userService } from "../services/userService.js";
import { RoleService } from "../services/roleService.js";
import { generateJWT } from "../utils/jwt.js";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/errors.js";

export const Register = async (req, res) => {
    const userInfo = new User(req.body);

    const { success, missingFields } = userInfo.validateFields();
    
    if (!success) {
        throw new NotFoundError("Faltan campos obligatorios.", missingFields);
    }

    const existingUser = await userService.getUserByEmail(userInfo.email);

    if (existingUser.success) {
        throw new ConflictError("El usuario ya existe.");
    }

    const creationResult = await userService.createUser(userInfo);

    if (!creationResult.success) {
        throw new DatabaseError("Error al crear el usuario.");
    }

	res.json({ success: true, message: "Registro exitoso" });
};

export const Login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError("Email y contraseña son obligatorios.");
    }

    const existingUser = await userService.getUserByEmail(email);

    if (!existingUser.success) {
        throw new NotFoundError(existingUser.message);
    }
    
    const isPasswordValid = await userService.validatePassword(password, existingUser.data.password_hash);

    if (!isPasswordValid) {
        throw new UnauthorizedError("Credenciales inválidas.");
    }

    const { success, role } = await RoleService.getRoleById(existingUser.data.role_id);

    if (!success) {
        throw new NotFoundError("Rol no encontrado.");
    }

    const token = await generateJWT(existingUser.data.id, existingUser.data.name, role.code);
    const refreshToken = await generateJWT(existingUser.data.id, existingUser.data.name, role.code, "1d");

	res.json({ success: true, token_type: "Bearer", access_token : token, refresh_token: refreshToken,  expire: null});
};