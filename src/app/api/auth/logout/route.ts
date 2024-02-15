import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectURL = new URL("/", request.url);
  //   console.log(request.cookies);

  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `session=; Path=/; max-age=0`,
    },
  });
}
