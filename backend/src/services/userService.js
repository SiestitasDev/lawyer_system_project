import { supabase } from "../config/db.js";
import { DatabaseError } from "../errors/errors.js";
import { hashPassword, verifyPassword} from "../utils/passwordUtils.js";

export const userService = {
    async getAllUsers(roleUser) {
        
        let query = supabase
            .from('db_user')
            .select('id, name, email, is_active, role_id');

        if (roleUser) {
            query = query.eq('role_id', roleUser);
        }

        const { data, error } = await query;

        if (error) {
            if (error?.code === 'PGRST116') {
                return { success: true, users: [] };
            }
            throw new DatabaseError("Error obteniendo los usuarios de la base de datos.", error.message);
        }

        return { success: true, data };
    },
    async updateUser(userId, userInfo) {
        const userData = userInfo.toUser();
        const { data: user, error: userError } = await supabase
            .from('db_user')
            .update(userData)
            .eq('id', userId)
            .select()
            .single();

        if (userError) {
            throw new DatabaseError(`Error actualizando el usuario con ID ${userId}.`, userError.message);
        }

        const partnerData = userInfo.toPartner(userId);
        const { data: partner, error: partnerError } = await supabase
            .from('db_partner')
            .update(partnerData)
            .eq('user_id', userId)
            .select()
            .single();
        
        if (partnerError) {
            throw new DatabaseError(`Error actualizando el partner asociado al usuario con ID ${userId}.`, partnerError.message);
        }

        return { success: true, message: 'Usuario actualizado exitosamente.' };
    },
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

        return { success: true, data };
    },

    async getUserById(id){
        const { data, error } = await supabase
            .from('db_user')
            .select('id, name, email, is_active, role_id')
            .eq('id', id)
            .single()
            .maybeSingle();
        
        if (error) {
            if (error?.code === 'PGRST116') {
                return { success: false, message: 'Usuario no existe con ese ID.' };
            }
            throw new DatabaseError(`Error obteniendo el usuario con ID ${id} de la base de datos.`, error.message);
        }

        if (!data) {
            return { success: false, message: 'Usuario no existe con ese ID.' };
        }

        if (!data.is_active) {
            return { success: false, message: 'El usuario existe pero no está activo.' };
        }

        return { success: true, data};
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
    },

    async validatePassword(plainPassword, hashedPassword) {
        return await verifyPassword(plainPassword, hashedPassword);
    }

};