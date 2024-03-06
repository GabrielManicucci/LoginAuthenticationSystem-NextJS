import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { string } from "zod";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.href;
  console.log(path);
  const cookie = request.cookies.get("session");

  if (!cookie) {
    const redirectURL = new URL(
      `/session/login?redirect_url=${path}`,
      request.url
    );
    return NextResponse.redirect(redirectURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/private/profile"],
};
