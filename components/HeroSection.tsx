// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden px-4 py-4 bg-[#efeeec]">
      {/* Image Wrapper with rounded corners */}
      <div className="relative w-full h-full rounded-4xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/heroimageone.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
        />

        {/* Blurry Overlay only inside the rounded image */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[calc(100vh-80px)] px-4">
          
          {/* Heading (Two Lines) */}
          <h1 className="text-4xl md:text-8xl font-semibold leading-tight">
            <span className="block">Impact </span>
            <span className="block">In Every Pixel</span>
          </h1>

          {/* Skills / Tagline */}
          <p className="mt-2 text-sm md:text-base text-gray-300">
            React • Next.js • Node.js • PostgreSQL • MongoDB
          </p>

          {/* Floating Info Card */}
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
