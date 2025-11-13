import { supabase } from "../config/db.js";
import { DatabaseError } from "../utils/errors.js";
import { hashPassword } from "../utils/passwordUtils.js";

export const userService = {
    async getUserByEmail(email){
        const { data, error } = await supabase
            .from('db_user')
            .select('id, name, email, password_hash, is_active, role_id')
            .eq('email', email)
            .single();

        if (error) {
            if (error?.code === 'PGRST116') {
                return { success: false, message: 'Usuario no existe con ese email.' };
            }
            throw new DatabaseError(`Error obteniendo el usuario con email ${email} de la base de datos.`, error.message);
        }

        if (!data) {
            return { success: false, message: 'Usuario no existe con ese email.' };
        }

        if (!data.is_active) {
            return { success: false, message: 'El usuario existe pero no está activo.' };
        }

        return { success: true, user: data };
    },

    async createUser(userInfo) {

        const password_hash = await hashPassword(userInfo.password);
        const userData = userInfo.toUser(password_hash);
       
        const { data: user, error: userError } = await supabase
            .from('db_user')
            .insert([userData])
            .select()
            .single();

        if (userError) {
            throw new DatabaseError("Error al crear el usuario.", userError.message);
        }

        const partnerData = userInfo.toPartner(user.id);

        const { data: partner, error: partnerError } = await supabase
            .from('db_partner')
            .insert([partnerData])
            .select()
            .single();

        if (partnerError) {
            throw new DatabaseError("Error al crear el partner asociado al usuario.", partnerError.message);
        }

        return {"success": true, "message": "Usuario creado exitosamente."};
    }

};