import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
    datasources: {
        db: process.env.NODE_ENV === "test" ? {
            url: process.env.DATABASE_URL
        }
        :
        {
            url: process.env.DATABASE_URL
        }
    }
})