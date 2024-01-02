import { NextFunction, Request, Response } from "express";
import { AppErro } from "../erros/AppError";
import { verify } from "jsonwebtoken";

export const validatedToken = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    
    if(req.method == "GET") return next()
    
    if(!authorization){
        throw new AppErro(401, "sem token")
    }

    const token = authorization.slice(7)
    
    const verifyToken = verify(token, "ok")

    res.locals.user = verifyToken

    return next()
}