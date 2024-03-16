import z from 'zod'

export const schemaUpdateEmail = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" })
})

export const schemaUpdatePassword = z.object({
    newPassword: z.string().min(8, { message: "Must be 8 or more characters long" }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" })
})

export const schemaUserDelete = z.object({
    confirmationText: z.string().includes('delete', {message: "Type delete to confirm"})
})