// components/HeroSection.tsx
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import CrystalScene from "./CrystalScene";
import MobileNavMenu from "./MobileNavMenu";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden px-4 py-4 bg-[#efeeec] dark:bg-neutral-900">
      <div className="relative w-full h-full rounded-4xl overflow-hidden">
        {/* Crystal Scene - Hidden on mobile */}
        <div className="hidden sm:block absolute inset-0 z-0">
          <CrystalScene />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-900/25 via-slate-800/10 to-transparent" />

        {/* Mobile Hamburger Button - Absolute inside hero section */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="absolute md:hidden top-4 right-4 z-50 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black/70 backdrop-blur-md border border-white/30 hover:bg-black/90 transition-all flex items-center justify-center w-12 h-12"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Content - Center on mobile, right on desktop */}
        <div className="pointer-events-none relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 pb-10 text-center text-white sm:items-end sm:justify-end sm:text-right md:px-10 md:pb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-black font-archivo">
            <span className="block ">I Build </span>
            <span className="block ">Code & Design</span>
          </h1>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-6 z-10  px-4 py-3 text-left  backdrop-blur-[1px] md:bottom-10 md:left-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/85 font-archivo">
            3+ Years Experience
          </p>
          <p className="mt-1 text-[11px] text-black/70">
            Full-Stack Development
          </p>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>{isMobileMenuOpen && <MobileNavMenu />}</AnimatePresence>
    </section>
  );
}
