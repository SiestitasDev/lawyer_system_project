import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";
import { UnauthorizedError } from "../errors/errors.js";
import { userService } from "../services/userService.js";

export const authorizeRequest = async (req, res, next) => {
    let header = req.headers.authorization || req.headers.Authorization;

    if (!header || !header.startsWith("Bearer ")) {
        throw new UnauthorizedError("Token inválido");
    }

    const token = header.split(" ")[1];

    if (!token) {
        throw new UnauthorizedError("Token inválido");
    }

    const decoded = jwt.verify(token, JWT_SECRET); // { id, name, role }

    const { success, message, data } = await userService.getUserById(decoded.id);

    if (!success) {
      throw new UnauthorizedError(message);
    }

    req.user = {
        id: data.id,
        name: data.name,
        email: data.email,
        role_id: data.role_id,
        role: decoded.role,
        is_active: data.is_active,
    };

    return next();
}

export const generateJWT = async (userId, userName, role, expires = "1h") => {
    let token = jwt.sign(
        {
            id: userId,
            name: userName,
            role, // 'ADMIN' | 'LAWYER' | 'CLIENT'
        },
        JWT_SECRET,
        {
            expiresIn: expires,
        }
    );
    return token;
}