import { Request, Response } from "express"
import { usersService } from "../services/user.service"

class UserController {
    async create(req: Request, res: Response){
        const user = await usersService.create(req.body)

        return res.status(201).json(user)
    }

    async login(req: Request, res: Response){
        const user = await usersService.login(req.body)

        return res.status(200).json({ token: user })
    }  

    async findAll(req: Request, res: Response){
        const findUsers = await usersService.findAll()

        return res.status(200).json(findUsers)
    }  
    
    async update(req: Request, res: Response){
        const user = await usersService.update(req.body, req.params.id)

        return res.status(200).json(user)
    }  

    async destroy(req: Request, res: Response){
        await usersService.destroy(req.params.id)

        return res.status(204).json()
    }  
}

export const usersController = new UserController()