import "express-async-errors";
import express, { Application, json } from "express";
import { routerUser } from "./routes/user.route";
import { errorHandler } from "./middlewares/handlerErro";
import { routerCar } from "./routes/car.route";
import { validatedToken } from "./middlewares/validatedToken.middleware";
import { carOwner } from "./middlewares/car/carOwner.middleware";

export const app: Application = express()

app.use(json())
app.use("/users", routerUser)
app.use(validatedToken)
app.use("/cars", routerCar)
app.use(errorHandler)