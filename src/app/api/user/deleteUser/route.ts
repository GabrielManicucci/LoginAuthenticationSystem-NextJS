import { api, axios } from "@/lib/axios";
import { ErrorType } from "@/utils/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest) {

    try {
        const cookie = cookies().get('session')
        const redirectURL = new URL("/", request.url);
        const {data} = await api.delete('http://localhost:3333/delete', {headers: {"Authorization": `Bearer ${cookie?.value}`}})
        return NextResponse.redirect(redirectURL, {
            headers: {
              "Set-Cookie": `session=; Path=/; max-age=0`,
            },
            status: 302,
          });
    } catch (error) {
        const {response} = error as ErrorType 
        return NextResponse.json(response.data)
    }
}