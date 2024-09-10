// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define a function to check user authentication
const checkAuth = (req: NextRequest): boolean => {
  // Example: Check for an authentication token in cookies
  const token = req.cookies.get('auth-token');
  // Replace this with your actual authentication logic
  return Boolean(token);
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Define routes that need authentication
  const protectedRoutes = ['/dashboard', '/profile'];

  // Check if the current route is protected
  if (protectedRoutes.includes(pathname) && !checkAuth(req)) {
    // Redirect to the login page if not authenticated
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Define the routes that the middleware should apply to
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/setting'], // Apply middleware to these routes
};
