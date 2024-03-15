
import { UpdateEmailSchema } from "@/components/DialogComponentEmail"
import { UpdatePasswordSchema } from "@/components/DialogComponentPassword"
import { api, axios } from "@/lib/axios"
import { UserSchema } from "@/screens/SignupScreen"

export const user = () => ({
    getUser: async () => {
        try {
            const data = await axios.get('/api/user/getUser')
            return data
        } catch (error) {
            return error
        }
    },
    updateName: async (userData: UserSchema) => {
       const dada = await axios.patch('/api/user/updateName', {userData})
       return dada
    },
    updateEmail: async ({newEmail, password}: UpdateEmailSchema) => {
        const userData = {
            email: newEmail,
            password
        }
       const dada = await axios.patch('/api/user/updateEmail', {userData})
       return dada
    },
    updatePassword: async ({newPassword, password}: UpdatePasswordSchema) => {
        const userData = {
            newPassword,
            password
        }
       const dada = await axios.patch('/api/user/updatePassword', {userData})
       return dada
    },
    
})

