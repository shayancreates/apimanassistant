"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
            <SignUp path="/sign-up" routing="path" />
        </div>
    );
}
