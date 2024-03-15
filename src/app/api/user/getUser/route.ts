import { api, axios } from "@/lib/axios";
import { ErrorType } from "@/utils/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        const cookie = cookies().get('session')
        const {data} = await axios.get('http://localhost:3333/getUser', {headers: {"Authorization": `Bearer ${cookie?.value}`}})
        return NextResponse.json(data)
    } catch (error) {
        const {response} = error as ErrorType 
        console.log(response.data.error)
        return NextResponse.json(response.data)
    }
    
}