import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url));
    // if (request.nextUrl.pathname === "/profile"){
    //     return NextResponse.rewrite(new URL("/Hello", request.url));
    // }
    // if (request.nextUrl.pathname === "/comments/api"){
    //     return NextResponse.redirect(new URL("/comments", request.url));
    // }
    const response = NextResponse.next();
    const themePreference = response.cookies.get("theme");
    if (!themePreference)
        response.cookies.set("theme", "dark");
    response.headers.set("custom-headers", "custom-value");
    return response;
}