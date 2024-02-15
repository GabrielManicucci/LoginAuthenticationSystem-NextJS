import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const redirectURL = new URL("/", request.url);
  const cookieExpires = 60 * 60 * 24 * 7;

  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `session=${body}; Path=/; HttpOnly; max-age=${cookieExpires};`,
    },
    status: 302,
  });
}
