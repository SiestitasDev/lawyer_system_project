import Roles from '../config/roles.json';

function checkRole(rolesPermitidos) {
    return (req, res, next) => {
        // obtener roles del jwt del usuario
        // Como se obteniene Payload del token
        userRole = r

        // if (!rolesPermitidos.includes(req.user.rol)) {
        //     return res.status(403).json({ message: "Acceso denegado" });
        // }
        next();
    };
}

module.exports = checkRole;
