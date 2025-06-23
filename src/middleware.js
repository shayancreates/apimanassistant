// src/middleware.js
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
    '/',

    '/help(.*)',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/_next(.*)',
    '/favicon.ico'
]);

const middleware = clerkMiddleware(async (auth, req) => {
    if (!isPublicRoute(req)) {
        await auth.protect(); // Only /chatbot and any other private routes
    }
});

export default middleware;

export const config = {
    matcher: [
        // Protect everything except static files
        '/((?!_next|[^?]*\\.(?:.*)).*)',
    ],
};
