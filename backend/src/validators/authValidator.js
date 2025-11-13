import roles from '../config/roles.json';

export const validateRegisterBody = (body) => {
    const errors = [];

    if (!body || typeof body !== 'object') {
        errors.push('Body must be a JSON object');
        return errors;
    }

    if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
        errors.push('`name` is required and must be a non-empty string');
    }

    if (!body.email || typeof body.email !== 'string' || !/^\S+@\S+\.\S+$/.test(body.email)) {
        errors.push('`email` is required and must be a valid email address');
    }

    if (!body.password || typeof body.password !== 'string' || body.password.length < 6) {
        errors.push('`password` is required and must be at least 6 characters long');
    }

    const availableRoles = Object.values(roles || {});
    if (!body.role || typeof body.role !== 'string' || !availableRoles.includes(body.role)) {
        errors.push('`role` is required and must be one of: ' + availableRoles.join(', '));
    }

    return errors;
};

export default validateRegisterBody;
