import { NextRequest, NextResponse } from "next/server";
import { api } from "@/lib/axios";
import axios from "axios";

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const redirectURL = new URL("/", request.url);
    const cookieExpires = 60 * 60 * 24 * 7;

    const {data: {token}} = await axios.post('http://localhost:3333/login', body)

    return NextResponse.redirect(redirectURL, {
      headers: {
        "Set-Cookie": `session=${token}; Path=/; HttpOnly; max-age=${cookieExpires};`,
      },
      status: 302,
    });
  } catch (err) {
    console.log({error: err})
  }
}
