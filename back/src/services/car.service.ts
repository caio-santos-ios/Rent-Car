import { prisma } from "../database/prismaClient";
import { AppErro } from "../erros/AppError";
import { TcreateCar } from "../@types/car";

class CarService {
    constructor(){}

    async create(carData: TcreateCar, userId: number){
        
        const car = await prisma.car.create({
            data: { ...carData, userId }
        })

        return car
    }

    async findAll(){
        const findCars = await prisma.car.findMany({
            select: {
                id: true,
                model: true,
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        return findCars
    }

    async update(carData: any, id: string){
        const myId = Number(id)

        const findCar = await prisma.car.findUnique({
            where: { id: myId }
        })

        if(!findCar){
            throw new AppErro(404, "Carro não encontrado")
        }

        const car = await prisma.car.update({
            where: { id: myId },
            data: { ...carData }
        })
        
        return car
    }

    async destroy(id: string){
        const myId = Number(id)
        
        const findCar = await prisma.car.findUnique({
            where: { id: myId }
        })

        if(!findCar){
            throw new AppErro(404, "Carro não encontrado")
        }

        await prisma.car.delete({
            where: { id: myId }
        })

        return
    }
}

export const carsService = new CarService()