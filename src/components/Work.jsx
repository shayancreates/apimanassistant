"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const steps = [
    {
      title: "Sign Up",
      description: "Create your account in seconds using email or GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      title: "Connect Your APIs",
      description: "Add your API endpoints with our zero-config wizard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9z"></path>
          <path d="M12 7v10"></path>
          <path d="M7 12h10"></path>
        </svg>
      ),
    },
    {
      title: "Configure Settings",
      description: "Set up rate limits, authentication, and monitoring",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
    },
    {
      title: "Go Live",
      description: "Start managing and monitoring your APIs in production",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-gray-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-200 sm:text-4xl lg:text-5xl">
            How APIman Works
          </h2>
          <p className="mt-4 text-xl text-slate-300/80 max-w-3xl mx-auto">
            Get started with API management in just 4 simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline */}
          <div className="absolute left-8 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={controls}
              variants={{
                visible: {
                  scaleY: 1,
                  transition: {
                    duration: 1.5,
                    ease: [0.65, 0, 0.35, 1],
                  },
                },
              }}
              className="h-full w-full origin-top bg-gradient-to-b from-blue-500 to-blue-300"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                backgroundSize: "10px 20px",
              }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.3 + index * 0.2,
                      duration: 0.6,
                    },
                  },
                }}
                className={`relative flex flex-col items-center gap-8 md:flex-row md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step number */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 ring-8 ring-gray-900">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={controls}
                    variants={{
                      visible: {
                        scale: 1,
                        transition: {
                          delay: 0.5 + index * 0.2,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        },
                      },
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/30 backdrop-blur-sm"
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Step content */}
                <div
                  className={`grow text-center md:text-left ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-slate-200">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-300/90">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
