import roles from '../config/roles.json';

class Role {
    constructor() {
        this.roles = roles.roles;
    }

    getRoleByName(name) {
        return this.roles.find((role) => role.code === name);
    }

    getRoles() {
        return this.roles;
    }
}

module.exports = Role;