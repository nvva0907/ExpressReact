import { AppException } from "../helpers/response.helper.js";

export function errorHandler(err, req, res, next) {
    if (err instanceof AppException) {
        res.status(400).json({
            status: 400,
            code: err.code,
            message: err.message,
            data: null,
        });
    } else {
        res.status(500).json({
            status: 500,
            code: "SERVER_ERROR",
            message: err.message || "Internal Server Error",
            data: null,
        });
    }
}
