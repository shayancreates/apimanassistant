"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
            <SignIn path="/sign-in" routing="path" />
        </div>
    );
}
