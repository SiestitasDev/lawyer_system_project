import { UnauthorizedError } from '../errors/errors.js';

export function checkRole(...allowedRoles) {
    return (req, res, next) => {
        const userRole = req.user?.role;

        if (!userRole || !allowedRoles.includes(userRole)) {
            throw new UnauthorizedError("No tienes permiso para acceder a este recurso.");
        }

        next();
    };
}