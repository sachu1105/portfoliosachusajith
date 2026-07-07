"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    year: "[2024]",
    image: "/images/tranmaiecommerce.png",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "News Portals",
    year: "[2024]",
    image: "/images/tranmainews.png",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Robotics Control Panel",
    year: "[2023]",
    image: "/images/macBookAir-1.png",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Live Communication Hub",
    year: "[2024]",
    image: "/images/tranmaimobile.png",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 5,
    title: "Image Editing Tool",
    year: "[2023]",
    image: "/images/tranmaieditor.png",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Certificate Generator",
    year: "[2024]",
    image: "/images/MacBookAir1.png",
    color: "from-yellow-500/20 to-orange-500/20",
  },
];

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Keep first render consistent between server and client to avoid hydration mismatch.
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  // Keep isMobile in sync on resize
  useEffect(() => {
    setHasMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getTotalScrollHeight = useCallback(() => projects.length * 100, []);

  useEffect(() => {
    if (isMobile) {
      if (containerRef.current) {
        containerRef.current.style.minHeight = "";
      }
      return;
    }
    const updateHeight = () => {
      if (containerRef.current) {
        containerRef.current.style.minHeight = `${getTotalScrollHeight()}vh`;
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [getTotalScrollHeight, isMobile]);

  // Desktop: track scroll progress + active project
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current || !rightPanelRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const scrollY = window.scrollY;
      const containerTop = containerRect.top + scrollY;
      const containerTotalHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolledDistance = Math.max(0, scrollY - containerTop);
      const maxScrollDistance = containerTotalHeight - viewportHeight;
      let progress =
        maxScrollDistance > 0 ? scrolledDistance / maxScrollDistance : 0;
      progress = Math.min(Math.max(progress, 0), 1);
      setScrollProgress(progress);

      const panelRect = rightPanelRef.current.getBoundingClientRect();
      const panelCenterY = panelRect.top + panelRect.height / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      imageRefs.current.forEach((imgEl, idx) => {
        if (imgEl) {
          const imgRect = imgEl.getBoundingClientRect();
          const imgCenterY = imgRect.top + imgRect.height / 2;
          const distance = Math.abs(imgCenterY - panelCenterY);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = idx;
          }
        }
      });

      setActiveProject(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Mobile: track which card is in view
  useEffect(() => {
    if (!isMobile || !horizontalScrollRef.current) return;

    const handleHorizontalScroll = () => {
      const scrollContainer = horizontalScrollRef.current;
      if (!scrollContainer) return;
      const scrollLeft = scrollContainer.scrollLeft;
      const clientWidth = scrollContainer.clientWidth;
      const currentIndex = Math.round(scrollLeft / clientWidth);
      setActiveProject(Math.min(currentIndex, projects.length - 1));
    };

    const scrollContainer = horizontalScrollRef.current;
    scrollContainer.addEventListener("scroll", handleHorizontalScroll, {
      passive: true,
    });
    return () =>
      scrollContainer.removeEventListener("scroll", handleHorizontalScroll);
  }, [isMobile]);

  const stackTranslateY = -scrollProgress * (projects.length - 1) * 90;

  // ─── MOBILE VIEW ────────────────────────────────────────────────────────────
  if (hasMounted && isMobile) {
    return (
  
      <section
        className="relative w-full flex flex-col"
        style={{ minHeight: "100svh" }}
      >
     
        <div className="flex items-center justify-between px-5 pt-8 pb-3 flex-shrink-0">
          <h2 className="text-xl font-light tracking-widest opacity-50 uppercase">
            My Works
          </h2>
          {/* Mono counter gives a subtle editorial feel: "01 / 06" */}
          <span className="text-white/30 text-sm font-mono">
            {String(activeProject + 1).padStart(2, "0")}
            &nbsp;/&nbsp;
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

  
        <div
          ref={horizontalScrollRef}
          className="flex flex-1 overflow-x-auto snap-x snap-mandatory px-4 gap-4"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
            
              className="flex-shrink-0 snap-center"
              style={{ width: "calc(100vw - 2rem)" }}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
            >
       
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ height: "calc(100svh - 140px)" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Subtle dark veil so text is always readable */}
                <div className="absolute inset-0 bg-black/25" />

                {/* Text sits at the bottom with a gradient fade-up */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-1 font-mono">
                    {project.year}
                  </p>
                  <h3 className="text-white text-2xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Progress Dots ── */}
        {/* flex-shrink-0 again — never let flexbox squish this row */}
        <div className="flex justify-center items-center gap-2 py-5 flex-shrink-0">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeProject
                  ? "w-8 bg-orange-500"
                  : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>
    );
  }

  // ─── DESKTOP VIEW (unchanged) ───────────────────────────────────────────────
  return (
    <section
      ref={containerRef}
      className="relative  bg-[#efeeec] dark:bg-neutral-900 px-4 py-4"
    >
      <div className="sticky top-4 h-[calc(100vh-2rem)] flex rounded-3xl overflow-hidden ">
        {/* Left Panel */}
        <div className="w-1/2  flex flex-col justify-center pl-12 pr-8">
          <div className="absolute top-12 left-12">
            <h2 className="text-black dark:text-white text-lg font-light tracking-wider opacity-60">
              My Works
            </h2>
          </div>
          <div className="space-y-1">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  index <= activeProject
                    ? "opacity-100 translate-x-0"
                    : "opacity-30 translate-x-4"
                }`}
              >
                <h3
                  className={`text-4xl md:text-4xl lg:text-4xl  2xl:text-6xl font-medium leading-tight transition-all duration-500 ${
                    index === activeProject ? "text-white" : "text-gray-600"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div
          ref={rightPanelRef}
          className="w-1/2 relative overflow-hidden flex items-center justify-center p-18"
        >
          <div
            className="relative w-full h-[80%] transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `translateY(${stackTranslateY}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="absolute inset-x-0 w-full h-[85%] rounded-2xl overflow-hidden"
                style={{ transform: `translateY(${index * 110}%)` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl`}
                />
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-8 flex space-x-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-0.5 transition-all duration-500 ${
                  index <= activeProject ? "w-8 bg-white" : "w-4 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}