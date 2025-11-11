import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const authorizeRequest = async (req, res, next) => {

    let header = req.headers.Authorization || req.headers.authorization;

    if (!header || !header.startsWith("Bearer")) {
        return next({ status: 401, message: "Solicitud no autorizada" });
    }

    const token = header.split(" ")[1];

    if (!token) {
        return next({ status: 401, message: "Solicitud no autorizada" });
    }


    jwt.verify(token, process.env.JWT_PASS, async (err, decoded) => {
        if (err) {
            return next({ status: 401, message: "Solicitud no autorizada" });
        }

        // Falta validar en la base de datos si existe el usuario y si está activo
        // Query the database for the user
        // let user = await User.findOne({
        //     where: { id: decoded.id, is_active: true, blocked: false },
        //     attributes: { exclude: ['password', 'is_active', 'blocked'] }
        // });

        // // If user is not found
        // if (!user) {
        //     return next({ status: 401, message: "Unauthorized request" });
        // }

        // Attach the user to the request object
        // req.user = user;
        return next();
    });
}

export const generateJWT = async (userId, userName, role) => {
    let token = jwt.sign(
        {
            id: userId,
            name: userName,
            role,
        },
        JWT_SECRET,
        {
            expiresIn: "1h",
        }
    );
    return token;
}