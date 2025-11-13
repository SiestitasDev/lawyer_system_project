import { AppError } from "../errors/AppError.js";

export class BadRequestError extends AppError {
    constructor(message = "Solicitud incorrecta", details = null) {
        super(message, 400, details);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message = "No autorizado", details = null) {
        super(message, 401, details);
    }
}

export class ForbiddenError extends AppError {
    constructor(message = "Prohibido", details = null) {
        super(message, 403, details);
    }
}

export class NotFoundError extends AppError {
    constructor(message = "No encontrado", details = null) {
        super(message, 404, details);
    }
}

export class ConflictError extends AppError {
    constructor(message = "Conflicto", details = null) {
        super(message, 409, details);
    }
}

export class DatabaseError extends AppError {
    constructor(message = "Error de base de datos", details = null) {
        super(message, 500, details);
    }
}