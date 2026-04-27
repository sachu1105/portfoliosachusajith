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

  // FIX 1: Removed the non-breaking space (\u00A0) to allow mobile wrapping
  const text = "Carbon Form";
  
  // FIX 2: Disable horizontal shift on mobile (<768px) to prevent layout thrashing and clipping
  const isMobile = windowWidth < 768;
  const translateX = !isMobile && windowWidth ? (1 - scrollProgress) * (windowWidth * 0.4) : 0;
  
  const opacity = Math.min(scrollProgress * 2, 1);

  return (
    <div className="dark:bg-neutral-900 px-4 md:px-8 lg:px-6 py-6">
      <footer className="bg-white dark:bg-black rounded-3xl overflow-hidden shadow-lg">
        <div className="max-w-full mx-auto px-6 md:px-12 py-10 md:py-12">
          
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
            
            <div className="flex-1 max-w-md mx-auto lg:mx-0 w-full">
              {/* Centered title on mobile */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">Connect with me</h3>
              
              <div className="flex items-center dark:bg-neutral-900 rounded-full overflow-hidden border border-neutral-700">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-3 bg-transparent text-black dark:text-white placeholder-neutral-500 outline-none text-sm md:text-base"
                />
                <button className="bg-[#A8F5E1] p-2 md:p-3 rounded-full shrink-0 m-1 hover:scale-105 transition">
                  <ArrowUpRight className="text-black" size={20} />
                </button>
              </div>

              {/* Centered social dock on mobile */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <DockDemo />
              </div>
            </div>

            {/* FIX 3: Switched to flex-row wrap on mobile to save vertical height */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 text-base md:text-lg font-medium mt-4 lg:mt-0">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/myservices" className="hover:underline">Services</Link>
            </div>
          </div>

          {/* Big Brand Text - Animated */}
          <div 
            ref={containerRef} 
            className="w-full mt-12 overflow-hidden flex items-center justify-center" 
          >
            <div
              // FIX 4: Changed `whitespace-nowrap` to `md:whitespace-nowrap` to allow safe breaking on tiny screens
              className="relative text-center md:whitespace-nowrap will-change-transform"
              style={{
                transform: `translateX(${translateX}px)`,
                opacity: opacity,
                transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out",
              }}
            >
              <h1 className="w-full font-bold tracking-tight text-[clamp(3rem,15vw,13rem)] leading-[1.1] md:leading-none px-2 md:px-12">
                {text}
              </h1>
            </div>
          </div>

          {/* Bottom Row */}
          {/* FIX 5: Centered stack on mobile, row on desktop */}
          <div className="mt-8 border-t border-neutral-700 pt-6 flex flex-col md:flex-row items-center md:justify-between gap-4 text-xs md:text-sm text-neutral-500 md:text-neutral-400">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Carbon Form. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}