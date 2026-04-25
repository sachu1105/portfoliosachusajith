"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DockDemo } from "./SocialTags";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle Window Resize
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Handle Scroll Progress
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const maxScroll = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;

      const scrolledSoFar = windowHeight - rect.top;
      const totalDistance = scrolledSoFar + (maxScroll - currentScroll);

      if (scrolledSoFar <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = totalDistance > 0 ? scrolledSoFar / totalDistance : 1;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "Carbon\u00A0Form";
  
  // SPEED FIX: Multiply by 0.4 instead of 1. 
  // It now only travels 40% of the screen width instead of 100%, making it move much slower.
  const translateX = windowWidth ? (1 - scrollProgress) * (windowWidth * 0.4) : 0;
  
  const opacity = Math.min(scrollProgress * 2, 1);

  return (
    <div className="dark:bg-neutral-900 px-4 md:px-8 lg:px-6 py-6">
      <footer className="bg-white dark:bg-black rounded-3xl overflow-hidden shadow-lg">
        <div className="max-w-full mx-auto px-6 md:px-12 py-12">
          
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            
            <div className="flex-1 max-w-md">
              <h3 className="text-3xl font-bold mb-4">Connect with me</h3>
              <div className="flex items-center dark:bg-neutral-900 rounded-full overflow-hidden border border-neutral-700">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-3 bg-transparent text-white placeholder-neutral-500 outline-none"
                />
                <button className="bg-[#A8F5E1] p-3 rounded-full shrink-0 m-1 hover:scale-105 transition">
                  <ArrowUpRight className="text-black" size={20} />
                </button>
              </div>

              <div className="mt-4">
                <DockDemo />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-8 text-lg font-medium">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/myservices" className="hover:underline">Services</Link>
              {/* <Link href="/projects" className="hover:underline">Works</Link> */}
            </div>
          </div>

          {/* Big Brand Text - Animated */}
          <div 
            ref={containerRef} 
            // CENTERING FIX: Removed lg:justify-start to force centering on all screens
            className="w-full mt-12 overflow-hidden flex items-center justify-center" 
          >
            <div
              className="relative whitespace-nowrap will-change-transform"
              style={{
                transform: `translateX(${translateX}px)`,
                opacity: opacity,
                // SMOOTHNESS FIX: Added a custom cubic-bezier transition. 
                // This acts as a dampener, catching the raw scroll values and smoothing them out.
                transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out",
              }}
            >
              {/* CENTERING FIX: Removed lg:text-left to ensure text aligns center */}
              <h1 className="w-full font-bold tracking-tight text-[clamp(2rem,13vw,13rem)] leading-none text-center px-6 md:px-12">
                {text}
              </h1>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-8 border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Carbon Form. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}