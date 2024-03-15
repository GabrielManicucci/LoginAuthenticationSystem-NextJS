import z from 'zod'

export const updateEmailSchema = z.object({
    newEmail: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" })
})

export const updatePasswordSchema = z.object({
    newPassword: z.string().min(8, { message: "Must be 8 or more characters long" }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" }),
})