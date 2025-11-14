import { clientService } from "../services/clientService.js";
import { BadRequestError } from "../errors/errors.js";

export const getClients = async (req, res) => {
  const result = await clientService.getAllClients();
  if (!result.success) {
    throw new BadRequestError("Error al obtener la lista de clientes.");
  }
  res.json({ success: true, data: result.data });
};

export const getClientById = async (req, res) => {
  const userId = req.params.id || null;
  if (!userId) {
    throw new BadRequestError("El ID de cliente es requerido.");
  }
  const result = await clientService.getClientById(userId);
  if (!result.success) {
    throw new BadRequestError(result.message);
  }
  res.json({ success: true, data: [result.data] });
};

export const createClient = async (req, res) => {
  const {name,first_name,last_name,email,password,doc_type_id,doc_number,phone,address,} = req.body;

  if (!name ||!first_name ||!last_name ||!email ||!password ||!doc_type_id ||!doc_number ||!phone ||!address) {
    throw new BadRequestError(
      "Todos los campos son obligatorios para registrar un cliente."
    );
  }

  const result = await clientService.createClient(req.body);
  if (!result.success) {
    throw new BadRequestError(result.message || "Error al crear el cliente.");
  }
  res.status(201).json({
    success: true,
    message: result.message || "Cliente creado exitosamente.",
  });
};

export const updateClient = async (req, res) => {
  const userId = req.params.id || null;
  if (!userId) {
    throw new BadRequestError("El ID de cliente es requerido.");
  }

  const result = await clientService.updateClient(userId, req.body);
  if (!result.success) {
    throw new BadRequestError(result.message || "Error al actualizar cliente.");
  }
  res.json({
    success: true,
    message: result.message || "Cliente actualizado exitosamente.",
  });
};

export const deactivateClient = async (req, res) => {
  const userId = req.params.id || null;
  if (!userId) {
    throw new BadRequestError("El ID de cliente es requerido.");
  }

  const result = await clientService.deactivateClient(userId);
  if (!result.success) {
    throw new BadRequestError(result.message || "Error al desactivar cliente.");
  }
  res.json({
    success: true,
    data: result.data,
  });
};
