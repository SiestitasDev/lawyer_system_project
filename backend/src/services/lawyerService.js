import { supabase } from "../config/db.js";
import { userService } from "./userService.js";
import { RoleService } from "./roleService.js";
import { User } from "../models/User.js";
import { DatabaseError } from "../errors/errors.js";
import { ROLES } from "../config/roles.js";

export const lawyerService = {
  async getLawyerRoleId() {
    const { role } = await RoleService.getRoleByCode(ROLES.LAWYER);
    return role.id;
  },

  async getAllLawyers() {
    const roleId = await this.getLawyerRoleId();
    const result = await userService.getAllUsers(roleId); 
    return result;
  },

  async getLawyerById(userId) {
    const roleId = await this.getLawyerRoleId();
    const result = await userService.getUserById(userId);
    if (!result.success) {
      return result; 
    }
    if (result.data.role_id !== roleId) {
      return {
        success: false,
        message: "El usuario existe pero no tiene rol de abogado.",
      };
    }
    return { success: true, data: result.data };
  },

  async createLawyer(payload) {
    const roleId = await this.getLawyerRoleId();

    const userInfo = new User({
      ...payload,
      role_id: roleId,
    });

    const creationResult = await userService.createUser(userInfo);
    return creationResult;
  },

  // Actualizar datos de un abogado
  async updateLawyer(userId, payload) {
    const roleId = await this.getLawyerRoleId();
    const existing = await userService.getUserById(userId);

    if (!existing.success) {
      return existing; 
    }

    if (existing.data.role_id !== roleId) {
      return {
        success: false,
        message: "El usuario existe pero no es abogado.",
      };
    }

    const userInfo = new User(payload);
    const updated = await userService.updateUser(userId, userInfo);
    return updated;
  },


  async deactivateLawyer(userId) {
    const roleId = await this.getLawyerRoleId();

    const { data, error } = await supabase
      .from("db_user")
      .update({ is_active: false })
      .eq("id", userId)
      .eq("role_id", roleId) 
      .select("id, name, email, is_active, role_id")
      .single();

    if (error?.code === "PGRST116" || !data) {
      return {
        success: false,
        message: "No existe un abogado con ese ID.",
      };
    }

    if (error) {
      throw new DatabaseError(
        "Error desactivando al abogado.",
        error.message
      );
    }
    return { success: true, data };
  },
};
