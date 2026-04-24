// components/HeroSection.tsx
"use client";

import React from "react";
import CrystalScene from "./CrystalScene";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden px-4 py-4 bg-[#efeeec] dark:bg-neutral-900">
      <div className="relative w-full h-full rounded-4xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CrystalScene />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-900/25 via-slate-800/10 to-transparent" />

        {/* Content */}
        <div className="pointer-events-none relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-end justify-end px-6 pb-10 text-right text-white md:px-10 md:pb-12">
          <h1 className="text-4xl md:text-8xl font-semibold leading-tight">
            <span className="block">I Build </span>
            <span className="block">Code & Design</span>
          </h1>


        </div>

        <div className="pointer-events-none absolute bottom-8 left-6 z-10  px-4 py-3 text-left  backdrop-blur-[1px] md:bottom-10 md:left-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
            3+ Years Experience
          </p>
          <p className="mt-1 text-[11px] text-white/70">Full-Stack Development</p>
        </div>
      </div>
    </section>
  );
}