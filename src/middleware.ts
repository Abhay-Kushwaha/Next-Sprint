import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {  
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/' || path === '/login' || path === '/signup' || path === '/verifyemail';
    const token = request.cookies.get('token')?.value || "";
    if (token && isPublicPath) { 
        // return NextResponse.redirect('/profile');
        return NextResponse.redirect(new URL('/profile', request.url));
    }
    if(!token && !isPublicPath) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/profile/:path*',
        '/login',
        '/signup',
        '/verifyemail'
    ]
};