import { AppError } from '../errors/AppError.js';

export const errorMiddleware = (err, req, res, next) => {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            details: err.details,
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        details: err.message,
    });
};
