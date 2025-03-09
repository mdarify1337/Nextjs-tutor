// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//     // return NextResponse.redirect(new URL("/", request.url));
//     // if (request.nextUrl.pathname === "/profile"){
//     //     return NextResponse.rewrite(new URL("/Hello", request.url));
//     // }
//     // if (request.nextUrl.pathname === "/comments/api"){
//     //     return NextResponse.redirect(new URL("/comments", request.url));
//     // }
//     // console.log(request)
//     const response = NextResponse.next();
//     const themePreference = response.cookies.get("theme");
//     if (!themePreference)
//         response.cookies.set("theme", "dark");
//     response.headers.set("custom-headers", "custom-value");
//     return response;
// }

import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/user-profile"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req) )
      await auth.protect();
}) 

// export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};