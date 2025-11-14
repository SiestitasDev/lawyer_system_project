// src/controllers/typeCaseController.js
import { typeCaseService } from "../services/typeCaseService.js";
import { BadRequestError } from "../errors/errors.js";

export const getTypeCases = async (req, res) => {
  const typeCases = await typeCaseService.getAll();
  res.json({ success: true, data: typeCases });
};

export const getTypeCaseById = async (req, res) => {
  const { id } = req.params;
  const typeCase = await typeCaseService.getById(Number(id));
  res.json({ success: true, data: typeCase });
};

export const createTypeCase = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    throw new BadRequestError("Nombre y descripción son obligatorios.");
  }

  const newTypeCase = await typeCaseService.create({ name, description });
  res.status(201).json({ success: true, data: newTypeCase });
};

export const updateTypeCase = async (req, res) => {
  const { id } = req.params;
  const { name, description, is_active } = req.body;

  if (!name || !description) {
    throw new BadRequestError("Nombre y descripción son obligatorios.");
  }

  const updated = await typeCaseService.update(Number(id), {
    name,
    description,
    is_active,
  });

  res.json({ success: true, data: updated });
};

export const deleteTypeCase = async (req, res) => {
  const { id } = req.params;

  const deleted = await typeCaseService.softDelete(Number(id));
  res.json({ success: true, data: deleted });
};
