"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const startOffset = windowHeight * 1.5;
      const endOffset = -elementHeight * 2;
      const totalDistance = startOffset - endOffset;

      if (elementTop <= startOffset && elementTop >= endOffset) {
        const progress = (startOffset - elementTop) / totalDistance;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "Ready to Rise";
  const translateX = windowWidth
    ? (1 - scrollProgress) * (windowWidth + 600) - 600
    : 0;
  const opacity = Math.min(scrollProgress * 2, 1);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[40vh] overflow-hidden flex items-center justify-center px-4"
    >
      <div className="relative w-full max-w-full">
        <div
          className="relative whitespace-nowrap"
          style={{
            transform: `translateX(${translateX}px)`,
            opacity: opacity,
            transition: "none",
          }}
        >
          <h1
            className="text-8xl md:text-9xl lg:text-[12rem] font-medium  leading-none tracking-tight"
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
}
