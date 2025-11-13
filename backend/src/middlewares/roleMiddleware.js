import Roles from '../config/roles.json';
import { UnauthorizedError } from '../errors/errors.js';

function checkRole(...allowedRoles) {
    return (req, res, next) => {
        const userRole = req.user?.role;

        if (!userRole || !allowedRoles.includes(userRole)) {
            throw new UnauthorizedError("No tienes permiso para acceder a este recurso.");
        }

        next();
    };
}

module.exports = checkRole;
