import { api, axios } from "@/lib/axios";
import { ErrorType } from "@/utils/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(request: NextRequest) {
    const body = await request.json()
    const userData = body.userData

    try {
        const cookie = cookies().get('session')
        const {data} = await api.patch('http://localhost:3333/updateEmail', userData, {headers: {"Authorization": `Bearer ${cookie?.value}`}})
        return NextResponse.json(data)
    } catch (error) {
        const {response} = error as ErrorType 
        return NextResponse.json(response.data)
    }
}