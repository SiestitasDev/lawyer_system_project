import { supabase } from '../config/db.js';
import { NotFoundError, DatabaseError } from '../utils/errors.js';

export const RoleService = {
    async getRoleById(id) {
        const { data, error } = await supabase
            .from('db_role')
            .select('id, code, name')
            .eq('id', id)
            .single();

        if (error?.code === "PGRST116") {
            throw new NotFoundError(`El rol con id ${id} no existe.`);
        }

        if (error) {
            throw new DatabaseError("Error consultando la base de datos.", error.message);
        }

        return data;
    },

    async getRoleByCode(code) {
        const { data, error } = await supabase
            .from('db_role')
            .select('id, code, name')
            .eq('code', code)
            .single();

        if (error?.code === "PGRST116") {
            throw new NotFoundError(`El rol con código ${code} no existe.`);
        }

        if (error) {
            throw new DatabaseError("Error consultando la base de datos.", error.message);
        }

        return data;
}
};
