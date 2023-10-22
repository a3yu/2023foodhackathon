import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req, evt) {
    console.log(1);
    if (
      auth.userId == "user_2X5HzNONt7j0m9cG9ciaR1pUKZB" &&
      req.nextUrl.pathname != "/dashboardConsumer"
    ) {
      const orgSelection = new URL("/dashboardConsumer", req.url);
      return NextResponse.redirect(orgSelection);
    }
    if (
      auth.userId == "user_2X5IYwMWz4M5tYMRfUu47DUNTZ7" &&
      req.nextUrl.pathname != "/dashboardConsumer"
    ) {
      const orgSelection = new URL("/dashboardConsumer", req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
