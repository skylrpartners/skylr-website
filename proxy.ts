import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_PASSWORDS = (process.env.ACCESS_PASSWORDS || '')
  .split(',')
  .map(p => p.trim())
  .filter(Boolean);

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Allow login page and login API through without auth
  if (path === "/login" || path.startsWith("/api/login")) {
    return NextResponse.next();
  }

  // Check access cookie
  const accessCookie = request.cookies.get("skylr_access");
  if (accessCookie && VALID_PASSWORDS.includes(accessCookie.value)) {
    return NextResponse.next();
  }

  // Redirect to login, preserving the originally-requested path
  const loginUrl = new URL("/login", request.url);
  if (path !== "/") {
    loginUrl.searchParams.set("next", path);
  }
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/|favicon.ico|images/).*)"],
};
