import { supabase } from "../config/db.js";
import { DatabaseError, NotFoundError } from "../errors/errors.js";

export const typeCaseService = {
  async getAll() {
    const { data, error } = await supabase
      .from("db_type_cases")
      .select("id, name, description, is_active")
      .order("id", { ascending: true });

    if (error) {
      throw new DatabaseError("Error al obtener los tipos de caso.", error.message);
    }
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("db_type_cases")
      .select("id, name, description, is_active")
      .eq("id", id)
      .single();

    if (error?.code === "PGRST116" || !data) {
      throw new NotFoundError(`No existe un tipo de caso con id ${id}.`);
    }

    if (error) {
      throw new DatabaseError("Error al obtener el tipo de caso.", error.message);
    }
    return data;
  },

  async create({ name, description }) {
    const { data, error } = await supabase
      .from("db_type_cases")
      .insert([
        {
          name,
          description,
          is_active: true,
        },
      ])
      .select()
      .single();

    if (error) {
      throw new DatabaseError("Error al crear el tipo de caso.", error.message);
    }

    return data;
  },

  async update(id, { name, description, is_active }) {
    const { data, error } = await supabase
      .from("db_type_cases")
      .update({ name, description, is_active })
      .eq("id", id)
      .select()
      .single();

    if (error?.code === "PGRST116" || !data) {
      throw new NotFoundError(`No existe un tipo de caso con id ${id}.`);
    }

    if (error) {
      throw new DatabaseError("Error al actualizar el tipo de caso.", error.message);
    }

    return data;
  },

  async softDelete(id) {
    const { data, error } = await supabase
      .from("db_type_cases")
      .update({ is_active: false })
      .eq("id", id)
      .select()
      .single();

    if (error?.code === "PGRST116" || !data) {
      throw new NotFoundError(`No existe un tipo de caso con id ${id}.`);
    }

    if (error) {
      throw new DatabaseError("Error al desactivar el tipo de caso.", error.message);
    }

    return data;
  },
};
