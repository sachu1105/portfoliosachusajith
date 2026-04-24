"use client";

import React from "react";

const visionLines = {
  skills: "Methodology over tools. I bridge the gap between intuitive front-end interfaces and robust, scalable back-end architectures",
  vision: "Simplicity is the ultimate sophistication. Converting complex business logic into lean, powerful digital products.",
};

export default function SkillsVisionHero() {
  return (
    <section className="relative min-h-[70vh] w-full bg-[#efeeec] dark:bg-black overflow-hidden px-6 py-20 md:px-10 lg:px-16 flex flex-col justify-between transition-colors duration-300">
      
      {/* Decorative Background Orbs */}
      <div className="pointer-events-none absolute left-[45%] top-[10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-400/40 mix-blend-multiply dark:mix-blend-soft-light blur-sm" />
      <div className="pointer-events-none absolute left-[45%] top-[40%] h-[400px] w-[400px] rounded-full bg-orange-200/50 mix-blend-multiply dark:mix-blend-soft-light blur-sm" />

      {/* TOP SECTION: Skills */}
      <div className="relative z-10 flex flex-col items-start">
        <h1 className="text-[15vw] md:text-[12vw] font-light leading-[0.8] tracking-tighter text-black dark:text-white">
          Skills
        </h1>
        <p className="mt-6 max-w-[400px] text-[13px] leading-tight uppercase tracking-wide text-black/80 dark:text-white/70">
          {visionLines.skills}
        </p>
      </div>

      {/* CENTER DIVIDER LINE */}
      <div className="absolute left-0 top-1/2 w-full border-t border-black/40 dark:border-white/20 z-0" />

      {/* BOTTOM SECTION: Vision */}
      <div className="relative z-10 flex flex-col items-end self-end text-right">
        <p className="mb-6 max-w-[400px] text-[13px] leading-tight text-black/80 dark:text-white/70">
          {visionLines.vision}
        </p>
        <h2 className="text-[15vw] md:text-[12vw] font-light leading-[0.8] tracking-tighter text-black dark:text-white">
          Vision
        </h2>
      </div>

    </section>
  );
}