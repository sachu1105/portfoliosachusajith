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
          
          {/* Left Annotation (Hidden on mobile/tablet, shows on lg+) */}
          <div className="hidden lg:block absolute -left-24 xl:-left-36 top-8 transform -rotate-6">
            <p className="font-serif italic text-slate-500 dark:text-slate-400 text-lg text-right pr-4">
              Hey, there!<br />I am a<br />Full-Stack Dev
            </p>
            {/* Curved SVG arrow pointing Up & Right */}
            <svg 
              width="50" 
              height="50" 
              viewBox="0 0 100 100" 
              className="absolute -right-8 bottom-4 stroke-blue-500 dark:stroke-slate-400 fill-none" 
              style={{ strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
            >
              <path d="M 10 90 Q 40 10, 95 45" />
              <path d="M 75 30 L 95 45 L 80 60" />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.05] font-archivo relative z-10">
            I build code <br className="hidden md:block" />
            & design.
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed relative z-10">
            Architecting the future of intelligent products. I build and scale production-ready systems from the ground up, bringing a deep focus on system reliability and seamless AI integration to every layer of the stack.
          </p>

          {/* Right Annotation (Hidden on mobile/tablet, shows on lg+) */}
          <div className="hidden lg:block absolute -right-28 xl:-right-44 top-[40%] transform rotate-2">
            {/* Curved SVG arrow pointing Down & Left */}
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 100 100" 
              className="absolute -left-16 top-7 stroke-orange-400 dark:stroke-orange-500 fill-none" 
              style={{ strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
            >
              <path d="M 90 10 Q 50 15, 10 80" />
              <path d="M 15 55 L 10 80 L 35 75" />
            </svg>
            <p className="font-serif italic text-slate-500 dark:text-slate-300 text-lg text-left pl-2 max-w-[220px]">
              Architecting end-to-end <br />
              production systems
            </p>
          </div>

        </div>

        {/* Keep Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm font-medium z-10">
          Keep Scrolling
          <div className="w-4 h-6 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center p-[2px]">
            <div className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}