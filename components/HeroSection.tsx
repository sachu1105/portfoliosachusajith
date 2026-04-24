// components/HeroSection.tsx
"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden px-4 py-4 bg-[#efeeec] dark:bg-neutral-900">
      <div className="relative w-full h-full rounded-4xl overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/neotwo-pingpong.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Blurry Overlay only inside the rounded image */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[calc(100vh-80px)] px-4">
          <h1 className="text-4xl md:text-8xl font-semibold leading-tight">
            <span className="block">I Build </span>
            <span className="block">Code & Design</span>
          </h1>

          <p className="mt-2 text-sm md:text-base text-gray-300">
            React • Next.js • Node.js • PostgreSQL • MongoDB
          </p>

          <div className="absolute bottom-8 right-6 bg-black/20 rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg border border-gray-700">
            <div>
              <p className="text-sm font-semibold text-white">
                3+ Years Experience
              </p>
              <p className="text-xs text-gray-300">Full-Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}