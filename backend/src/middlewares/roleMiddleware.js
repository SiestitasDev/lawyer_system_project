function checkRole(rolesPermitidos) {
    return (req, res, next) => {
        if (!rolesPermitidos.includes(req.user.rol)) {
            return res.status(403).json({ message: "Acceso denegado" });
        }
        next();
    };
}

module.exports = checkRole;
