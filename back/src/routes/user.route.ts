import { Request, Response, Router } from "express";
import { usersController } from "../controllers/user.controller";

export const routerUser = Router()

routerUser.post("/", (req: Request, res: Response) =>  usersController.create(req, res))
routerUser.post("/login", (req: Request, res: Response) =>  usersController.login(req, res))
routerUser.get("/", (req: Request, res: Response) => usersController.findAll(req, res))
routerUser.patch("/:id", (req: Request, res: Response) => usersController.update(req, res))
routerUser.delete("/:id", (req: Request, res: Response) => usersController.destroy(req, res))