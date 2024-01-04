import supertest from "supertest";
import { prisma } from "../../database/prismaClient"
import { app } from "../../app";
import { user, userResponse } from "../mock/user";

describe("Testa a criação do usuário", () => {
    beforeAll(async () => {
        // await prisma.$executeRaw`DELETE FROM "users";`;
        await prisma.$executeRaw`DROP TABLE IF EXISTS users;`;
        await prisma.$executeRaw`CREATE TABLE users;`;
        // const users = await prisma.$executeRaw`SELECT * FROM "cars"`;
        // console.log(users)
    })

    test("Testa a criação do usuário com sucesso", async () => {
        const res = await supertest(app).post('/users').send(user)
        
        console.log(res.body)
        expect(res.status).toBe(201)
        expect(res.body).toEqual({id: 1, ...userResponse})
    })
    
    test("Testa a criação do usuário já cadastrado", async () => {
        //const res = await supertest(app).get('/users')
        //console.log(res.body)
        // expect(3).toBe(3)
    })

    test("Testa a criação do usuário com email já cadastrado", () => {
        
        expect(3).toBe(3)
    })
})