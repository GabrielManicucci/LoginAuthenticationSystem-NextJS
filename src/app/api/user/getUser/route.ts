import { api, axios } from "@/lib/axios";
import { ErrorType } from "@/utils/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        const cookie = cookies().get('session')
        // const {data} = await axios.get('http://localhost:3333/getUser', {headers: {"Authorization": `Bearer ${cookie?.value}`}})
        const data = {
            name: 'Gabriel Manicucci',
            email: 'manicucci@gmail.com',
            cpf: '123.456.789-10',
            password: '12345678'
        }
        return NextResponse.json(data)
    } catch (error) {
        const {response} = error as ErrorType 
        console.log(response.data.error)
        return NextResponse.json(response.data)
    }
    
}