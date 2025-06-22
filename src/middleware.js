// src/middleware.js
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/help(.*)',
    '/_next(.*)',
    '/favicon.ico',
]);

const middleware = clerkMiddleware(async (auth, req) => {
    if (!isPublicRoute(req)) {
        await auth.protect();
    }
});

export default middleware;

export const config = {
    matcher: ['/((?!_next|[^?]*\\.(?:.*)).*)'],
};
