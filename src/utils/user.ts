
import { UpdateEmailSchema } from "@/components/DialogComponentEmail"
import { UpdatePasswordSchema } from "@/components/DialogComponentPassword"
import { api, axios } from "@/lib/axios"
import { User } from "@/screens/ProfileScreen"

export const user = () => ({
    getUser: async () => {
        try {
            const data = await axios.get('/api/user/getUser')
            return data
        } catch (error) {
            return error
        }
    },
    updateEmail: async ({newEmail, password}: UpdateEmailSchema) => {
        const userData = {
            email: newEmail,
            password
        }
       const dada = await axios.post('/api/user/updateEmail', {userData})
       return dada
    },
    updatePassword: async ({newPassword, password}: UpdatePasswordSchema) => {
        const userData = {
            newPassword,
            password
        }
       const dada = await axios.post('/api/user/updatePassword', {userData})
       return dada
    },
    
})

