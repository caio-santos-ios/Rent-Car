import { Request, Response } from "express"
import { carsService } from "../services/car.service"

class CarController {
    async create(req: Request, res: Response){
        const car = await carsService.create(req.body, res.locals.user.id)

        return res.status(201).json(car)
    }

    async findAll(req: Request, res: Response){
        const findUsers = await carsService.findAll()

        return res.status(200).json(findUsers)
    }  
    
    async update(req: Request, res: Response){
        const car = await carsService.update(req.body, req.params.id)

        return res.status(200).json(car)
    }  

    async destroy(req: Request, res: Response){
        await carsService.destroy(req.params.id)

        return res.status(204).json()
    }  
}

export const carsController = new CarController()