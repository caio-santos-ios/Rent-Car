import { Request, Response } from "express"
import UserService from "../services/user.service"

class UserController {
    create(req: Request, res: Response){

        return res.status(201).json({msg: "ok"})
    }
}

export default UserController