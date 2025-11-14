// src/controllers/lawyerController.js
import { lawyerService } from "../services/lawyerService.js";
import { BadRequestError } from "../errors/errors.js";

export const getLawyers = async (req, res) => {
  const result = await lawyerService.getAllLawyers();

  if (!result.success) {
    throw new BadRequestError("Error al obtener la lista de abogados.");
  }
  res.json({ success: true, data: result.data });
};

export const getLawyerById = async (req, res) => {
  const userId = req.params.id || null;

  if (!userId) {
    throw new BadRequestError("El ID de abogado es requerido.");
  }

  const result = await lawyerService.getLawyerById(userId);
  if (!result.success) {
    throw new BadRequestError(result.message);
  }
  res.json({ success: true, data: [result.data] });
};

export const createLawyer = async (req, res) => {
  const {name,first_name,last_name,email,password,doc_type_id,doc_number,phone,address} = req.body;

  // Validación básica de campos obligatorios
  if (!name ||!first_name || !last_name || !email || !password || !doc_type_id || !doc_number || !phone || !address) {
    throw new BadRequestError(
      "Todos los campos son obligatorios para registrar un abogado."
    );
  }

  const result = await lawyerService.createLawyer(req.body);
  if (!result.success) {
    throw new BadRequestError(result.message || "Error al crear el abogado.");
  }
  res.status(201).json({
    success: true,
    message: result.message || "Abogado creado exitosamente.",
  });
};
    
export const updateLawyer = async (req, res) => {
  const userId = req.params.id || null;
  if (!userId) {
    throw new BadRequestError("El ID de abogado es requerido.");
  }
  const result = await lawyerService.updateLawyer(userId, req.body);
  if (!result.success) {
    throw new BadRequestError(result.message || "Error al actualizar abogado.");
  }
  res.json({
    success: true,
    message: result.message || "Abogado actualizado exitosamente.",
  });
};

export const deactivateLawyer = async (req, res) => {
  const userId = req.params.id || null;
  if (!userId) {
    throw new BadRequestError("El ID de abogado es requerido.");
  }
  const result = await lawyerService.deactivateLawyer(userId);
  if (!result.success) {
    throw new BadRequestError(result.message || "Error al desactivar abogado.");
  }
  res.json({
    success: true,
    data: result.data,
  });
};
