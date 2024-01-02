import { compare, hash } from "bcryptjs";
import { TcreateUser, TloginUser } from "../@types/user";
import { prisma } from "../database/prismaClient";
import { AppErro } from "../erros/AppError";
import { sign } from "jsonwebtoken";
import { schemaUserResponse, schemaUserResponseAll } from "../schemas/user.schemas";

class UserService {
    constructor(){}

    async create(userData: TcreateUser){
        const findUserCpf = await prisma.user.findUnique({
            where: {
                cpf: userData.cpf
            }
        })

        const findUserEmail = await prisma.user.findUnique({
            where: {
                cpf: userData.cpf
            }
        })

        if(findUserCpf){
            throw new AppErro(401, "Usuário já cadastrado")
        }


        if(findUserEmail){
            throw new AppErro(401, "Email inválido")
        }

        userData.password = await hash(userData.password, 10)

        const user = await prisma.user.create({
            data: userData
        })

        return schemaUserResponse.parse(user)
    }

    async login(userLogin: TloginUser){
        const findUser = await prisma.user.findUnique({
            where: {
                email: userLogin.email
            }
        })  
        
        if(!findUser){
            throw new AppErro(401, "Email ou senha inválido")
        }

        const passwordValidated = compare(userLogin.password, findUser.password)

           
        if(!findUser){
            throw new AppErro(401, "Email ou senha inválido")
        }

        const token = sign({ email: findUser.email, id: findUser.id }, "ok", { expiresIn: '5h' })

        return token 
    }

    async findAll(){
        const findUsers = await prisma.user.findMany()

        return schemaUserResponseAll.parse(findUsers)
    }

    async update(userData: any, id: string){
        const myId = Number(id)

        const findUser = await prisma.user.findUnique({
            where: { id: myId }
        })

        if(!findUser){
            throw new AppErro(404, "Usuário não encontrado")
        }

        const user = await prisma.user.update({
            where: { id: myId },
            data: userData
        })
        
        return schemaUserResponse.parse(user)
    }

    async destroy(id: string){
        const myId = Number(id)
        
        const findUser = await prisma.user.findUnique({
            where: { id: myId }
        })

        if(!findUser){
            throw new AppErro(404, "Usuário não encontrado")
        }

        await prisma.user.delete({
            where: { id: myId }
        })
        
        return
    }
}

export const usersService = new UserService()