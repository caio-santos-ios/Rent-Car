import { Request, Response, Router } from "express";
import { carsController } from "../controllers/car.controlle";
import { carOwner } from "../middlewares/car/carOwner.middleware";

export const routerCar = Router()

routerCar.post("/", (req: Request, res: Response) => carsController.create(req, res))
routerCar.get("/", (req: Request, res: Response) => carsController.findAll(req, res))
routerCar.patch("/:id", carOwner, (req: Request, res: Response) => carsController.update(req, res))
routerCar.delete("/:id", carOwner, (req: Request, res: Response) => carsController.destroy(req, res))