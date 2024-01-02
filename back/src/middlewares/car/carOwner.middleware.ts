import { NextFunction, Request, Response } from "express";
import { AppErro } from "../../erros/AppError";
import { prisma } from "../../database/prismaClient";

export const carOwner = async (req: Request, res: Response, next: NextFunction) => {
    const myId = Number(req.params.id)
    const { authorization } = req.headers
    
    if(req.method == "GET") return next()
    
    if(!authorization){
        throw new AppErro(401, "sem token")
    }
    
    const car = await prisma.car.findFirst({
        where: { id: myId }
    })
    
    if(!car) throw new AppErro(404, 'Carro não encontrado')
    
    if(res.locals.user.id != car?.userId) throw new AppErro(403, "sem autorização")

    return next()
}