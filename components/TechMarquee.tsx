"use client";

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

const techStack = [
  { src: "/images/nextjss-.png", alt: "Next.js" },
  { src: "/images/reactr.png", alt: "React" },
  { src: "/images/tailwinder.png", alt: "Tailwind CSS" },
  { src: "/images/mongodb.png", alt: "MongoDB" },
  { src: "/images/postgree.png", alt: "PostgreSQL" },
  { src: "/images/docker.png", alt: "Docker" },
  { src: "/images/figmabw.png", alt: "Figma" },
];

export default function TechMarquee() {
  return (
    // FIX 1: Flex column on mobile so the text stacks, block on md+ to restore your desktop layout
    <section className="relative py-8 md:py-12 bg-[#efeeec] dark:bg-black transition-colors duration-300 overflow-hidden flex flex-col md:block">
      
      {/* FIX 2: Text stacked centrally on mobile (mb-6), returned to absolute left positioning on desktop */}
      <div className="md:absolute md:left-8 md:top-1/2 md:-translate-y-1/2 z-40 text-sm font-semibold text-black dark:text-white leading-tight text-center md:text-left mb-6 md:mb-0">
        Working with <br className="hidden md:block" /> Modern Technologies
      </div>

      {/* FIX 3: Shrunk the blur gradients on mobile (w-12), expanded back on larger screens (md:w-32 lg:w-64) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-32 lg:w-64 z-20 bg-gradient-to-r from-[#efeeec] via-[#efeeec]/80 to-transparent dark:from-black dark:via-black/80 backdrop-blur-sm" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-32 lg:w-64 z-20 bg-gradient-to-l from-[#efeeec] via-[#efeeec]/80 to-transparent dark:from-black dark:via-black/80 backdrop-blur-sm" />

      {/* FIX 4: Shrunk gaps (gap-10) and minimum widths on mobile to fit more logos smoothly */}
      <Marquee pauseOnHover className="[--duration:40s] gap-10 md:gap-24 group/track">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[100px] md:min-w-[180px] h-12 md:h-20"
          >
            <Image
              src={tech.src}
              alt={tech.alt}
              width={120}
              height={120}
              // FIX 5: Scaled down the actual image size for mobile screens
              // Hovering one logo dims/blurs the rest of the track and pops this one to solid black (white in dark mode via dark:invert)
              className="object-contain w-[70px] md:w-[120px] grayscale invert-0 dark:invert transition-all duration-300 group-hover/track:opacity-40 group-hover/track:blur-[2px] hover:opacity-100! hover:blur-none! hover:brightness-0!"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}