import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   return NextResponse.redirect(new URL('/', request.url))
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Assuming the JWT token is stored in a cookie named "token"

    if (request.cookies.has("token")) {
      // if token exit, then the user should be allowed to go to the dashboard route
      return NextResponse.rewrite(new URL("/dashboard", request.url));
    }
    // if not then the user should return to the login page.
    return NextResponse.rewrite(new URL("/admin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard",
};
