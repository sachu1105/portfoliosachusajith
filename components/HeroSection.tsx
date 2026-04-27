// components/HeroSection.tsx
"use client";

import React from "react";
import { RetroGrid } from "@/components/ui/retro-grid";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-12 pb-8 sm:pt-16 md:pt-28 bg-[#efeeec] dark:bg-black">
      {/* Retro grid background */}
      <RetroGrid
        className="z-0 opacity-60 dark:opacity-50 [mask-image:radial-gradient(ellipse_at_center,white_32%,rgba(255,255,255,0.75)_56%,transparent_84%)]"
        angle={65}
        cellSize={58}
        lightLineColor="#cbd5e1"
        darkLineColor="#334155"
      />

      <div className="relative w-full min-h-[calc(100vh-8rem)] rounded-4xl overflow-hidden flex flex-col items-center justify-center px-4">
        
        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto px-6 text-center">
          
          {/* Left Annotation (Hidden on mobile) */}
          <div className="hidden lg:block absolute -left-16 md:-left-32 top-4 transform -rotate-6">
            <p className="font-serif italic text-slate-500 dark:text-slate-400 text-lg">
              Hey, there!<br />I am a<br />Full-Stack Dev
            </p>
            {/* Simple curved SVG arrow */}
            <svg width="40" height="40" viewBox="0 0 100 100" className="absolute -right-8 top-10 stroke-slate-400 dark:stroke-slate-500 fill-none" style={{ strokeWidth: 2 }}>
              <path d="M10,90 Q40,10 90,50" />
              <path d="M80,40 L90,50 L80,60" />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.05] font-archivo">
            I build code <br className="hidden md:block" />
            & design.
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I architect scalable backends, deploy LLM pipelines, and own full production cycles in air-gapped environments. Specializing in Next.js, FastAPI, and bringing internal concepts to life.
          </p>

          {/* Right Annotation (Hidden on mobile) */}
          <div className="hidden lg:block absolute right-0 xl:-right-44 top-1/2 -translate-y-1/2 transform rotate-3">
            {/* Simple curved SVG arrow */}
            <svg width="50" height="50" viewBox="0 0 100 100" className="absolute -left-12 -top-4 stroke-slate-400 dark:stroke-slate-500 fill-none" style={{ strokeWidth: 2 }}>
              <path d="M90,10 Q30,30 20,80" />
              <path d="M10,70 L20,80 L30,70" />
            </svg>
            <p className="font-serif italic text-slate-500 dark:text-slate-300 text-lg text-left max-w-[220px]">
              Recently built an<br />
              <span className="font-bold text-slate-800 dark:text-white">AI Document Platform</span><br />
              from the ground up
            </p>
          </div>

        </div>

        {/* Keep Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm font-medium">
          Keep Scrolling
          <div className="w-4 h-6 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center p-[2px]">
            <div className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}