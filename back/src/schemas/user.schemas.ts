import { z }  from "zod";

const schemaUser = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    cpf: z.string()
})

export const schemaUserResponse = schemaUser.omit({password: true})

export const schemaUserResponseAll = schemaUserResponse.array()