"use client";

import React from "react";
import { Globe } from "@/components/magicui/globe";
import { motion } from "framer-motion";
import { AuroraText } from "./magicui/aurora-text";
import { ShimmerButton } from "./magicui/shimmer-button";

const ContactSection = () => {
  return (
    <section
      id="contactsection"
      className="bg-gray-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative h-[500px] w-full max-w-lg">
              <Globe />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950 pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="text-4xl font-bold  mb-15 tracking-tighter md:text-5xl text-slate-200 lg:text-7xl">
                <AuroraText> Contact </AuroraText>
              </h1>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <ShimmerButton
                  type="submit"
                  className="w-full px-6 py-3 font-bold"
                >
                  Send Message
                </ShimmerButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
