import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  "/", 
  "/sign-in(.*)", 
  "/sign-up(.*)",
  "/products(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();

    if (!userId && !isPublicRoute(req)) {
      // Add custom logic to run before redirecting

      return redirectToSignIn();
    }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};