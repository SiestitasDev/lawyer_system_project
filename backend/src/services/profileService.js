import { supabase } from "../config/db.js";
import { RoleService } from "./roleService.js";
import { DatabaseError, NotFoundError } from "../errors/errors.js";

export const profileService = {

  async getProfileByUserId(userId) {
    const { data: user, error: userError } = await supabase
      .from("db_user")
      .select("id, name, email, is_active, role_id")
      .eq("id", userId)
      .single();

        if (userError?.code === "PGRST116" || !user) {
            throw new NotFoundError(`Usuario no existe con ID ${userId}.`);
        }
        if (userError) {
            throw new DatabaseError(
                "Error obteniendo datos de usuario.",
                userError.message
            );
        }

        const { data: partner, error: partnerError } = await supabase
        .from("db_partner")
        .select(
            "first_name, last_name, doc_type_id, doc_number, phone, email, address"
        )
        .eq("user_id", userId)
        .single();

        if (partnerError && partnerError.code !== "PGRST116") {
            throw new DatabaseError(
                "Error obteniendo datos personales del usuario.",
                partnerError.message
            );
        }

        const { role } = await RoleService.getRoleById(user.role_id);
        return {
            id: user.id,
            profile_name: user.name,
            email: user.email,
            is_active: user.is_active,
            role: {
                id: role.id,
                code: role.code,   
                name: role.name,   
            },
            partner: partner || null,
        };
    },

  async updateProfile(userId, payload) {
        const {profile_name,name,email,first_name,last_name,doc_type_id,doc_number,phone,address,} = payload;
        const userUpdate = {};

        if (profile_name || name) {
        userUpdate.name = profile_name || name;
        }
        if (email) {
        userUpdate.email = email;
        }

        let updatedUser = null;
        if (Object.keys(userUpdate).length > 0) {
            const { data, error } = await supabase
                .from("db_user")
                .update(userUpdate)
                .eq("id", userId)
                .select("id, name, email, is_active, role_id")
                .single();

                if (error) {
                    throw new DatabaseError(
                    "Error actualizando datos de usuario.",
                    error.message
                    );
                }

            updatedUser = data;
        }


        const partnerUpdate = {};
        if (first_name !== undefined) partnerUpdate.first_name = first_name;
        if (last_name !== undefined) partnerUpdate.last_name = last_name;
        if (doc_type_id !== undefined) partnerUpdate.doc_type_id = doc_type_id;
        if (doc_number !== undefined) partnerUpdate.doc_number = doc_number;
        if (phone !== undefined) partnerUpdate.phone = phone;
        if (address !== undefined) partnerUpdate.address = address;
        if (email !== undefined) partnerUpdate.email = email;

        let updatedPartner = null;

        if (Object.keys(partnerUpdate).length > 0) {
            const { data, error } = await supabase
                .from("db_partner")
                .update(partnerUpdate)
                .eq("user_id", userId)
                .select(
                "first_name, last_name, doc_type_id, doc_number, phone, email, address"
                )
                .single();

                if (error) {
                    throw new DatabaseError(
                    "Error actualizando datos personales.",
                    error.message
                    );
                }

            updatedPartner = data;
        }

        if (!updatedUser && !updatedPartner) {
            return await this.getProfileByUserId(userId);
        }
            return await this.getProfileByUserId(userId);
    },
};
