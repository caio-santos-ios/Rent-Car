import supertest from "supertest";
import { prisma } from "../../database/prismaClient"
import { app } from "../../app";
import { user } from "../mock/user";

/*
describe("Testa a listagem dos usuários", () => {
    beforeAll(async () => {
        const users = await prisma.$executeRaw`SELECT * FROM "users";`;
    })

    test("Testa a lista do usuário com sucesso", async () => {
        const res = await supertest(app).get('/users')
        
        expect(res.status).toBe(200)
        expect(res.body).toEqual([{ id: 1, ...user }])
    })

    test("Testa a lista do usuário já cadastrado", () => {
        
        expect(3).toBe(3)
    })

    test("Testa a lista do usuário com email já cadastrado", () => {
        
        expect(3).toBe(3)
    })
})
*/