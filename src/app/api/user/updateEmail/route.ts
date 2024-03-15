import { api, axios } from "@/lib/axios";
import { ErrorType } from "@/utils/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const body = await request.json()
    const userData = body.userData

    try {
        const cookie = cookies().get('session')
        const {data} = await axios.post('http://localhost:3333/updateEmail', userData, {headers: {"Authorization": `Bearer ${cookie?.value}`}})
        return NextResponse.json(data)
    } catch (error) {
        const {response} = error as ErrorType 
        console.log(response.data.error)
        return NextResponse.json(response.data)
    }
}