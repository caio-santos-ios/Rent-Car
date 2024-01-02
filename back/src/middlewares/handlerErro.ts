import { Request, Response, NextFunction } from "express";
import { AppErro } from "../erros/AppError";

export const errorHandler = ( err: Error, _: Request, res: Response, next: NextFunction ) => {
    if (err instanceof AppErro) {
        return res.status(err.statusCode).json({
            message: err.message,
        })
    }

    return res.status(400).json({ message: err.message })
}