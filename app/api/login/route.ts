import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_PASSWORDS = (process.env.ACCESS_PASSWORDS || '')
  .split(',')
  .map(p => p.trim())
  .filter(Boolean);

const ONE_WEEK_SECONDS = 60 * 60 * 24 * 7;

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/");

  if (!VALID_PASSWORDS.includes(password)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "1");
    if (next && next !== "/") loginUrl.searchParams.set("next", next);
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  // Only allow same-origin redirects
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";

  const response = NextResponse.redirect(new URL(safeNext, request.url), {
    status: 303,
  });
  response.cookies.set("skylr_access", password, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ONE_WEEK_SECONDS,
  });
  return response;
}
