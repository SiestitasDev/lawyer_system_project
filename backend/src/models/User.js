export class User {
    constructor({name, first_name, last_name, email, password, role_id, doc_type_id, doc_number, phone, address}) {
        this.name = name;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.role_id = role_id;
        this.doc_type_id = doc_type_id;
        this.doc_number = doc_number;
        this.phone = phone;
        this.address = address;
    }

    toUser(password_hash) {
        return {
            name: this.name,
            email: this.email,
            password_hash,
            role_id: this.role_id,
            is_active: true,
        };
    }

    toPartner(user_id) {
        return {
            user_id,
            first_name: this.first_name,
            last_name: this.last_name,
            doc_type_id: this.doc_type_id,
            doc_number: this.doc_number,
            phone: this.phone,
            email: this.email,
            address: this.address,
        };
    }

    validateFields(){
        const missingFields = [];

        if (!this.name) missingFields.push('Nombre del Perfil');
        if (!this.first_name) missingFields.push('Nombre');
        if (!this.last_name) missingFields.push('Apellido');
        if (!this.email) missingFields.push('Correo electrónico');
        if (!this.password) missingFields.push('Contraseña');
        if (!this.doc_type_id) missingFields.push('Tipo de documento');
        if (!this.doc_number) missingFields.push('Número de documento');
        if (!this.phone) missingFields.push('Teléfono');
        if (!this.address) missingFields.push('Dirección');

        return { success: missingFields.length === 0, missingFields};
    }
}
