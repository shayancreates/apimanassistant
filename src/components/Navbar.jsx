"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Chatbot", href: "/chatbot" },
  { name: "Help", href: "/#contactsection" },
];

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-4 left-1/2 w-[90%] md:w-[85%] lg:w-[70%] -translate-x-1/2 rounded-xl bg-black/90 px-6 py-3 backdrop-blur-md z-[1000]"
      style={{
        boxShadow: "0 0 20px 4px rgba(84, 172, 255, 0.5)",
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          APIMan
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <SignedOut>
            <div className="flex gap-2">
              <SignInButton path="/sign-in" routing="path">
                <button className="text-white border border-white rounded px-3 py-1 hover:bg-white hover:text-black transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton path="/sign-up" routing="path">
                <button className="text-white border border-blue-500 rounded px-3 py-1 hover:bg-blue-500 hover:text-white transition">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <button
          onClick={() => setMobileOpen(!isMobileOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? "✖" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex flex-col gap-3 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-4 py-2 text-white hover:bg-blue-600 transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <SignedOut>
              <SignInButton>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-left rounded-md px-4 py-2 text-white hover:bg-green-600 transition"
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-left rounded-md px-4 py-2 text-white hover:bg-blue-600 transition"
                >
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="px-4 py-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
