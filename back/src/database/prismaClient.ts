import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
    datasources: {
        db: process.env.NODE_ENV === "test" ? {
            url: process.env.DATABASE_URL_TEST
        }
        :
        {
            url: process.env.DATABASE_URL
        }
    }
})
