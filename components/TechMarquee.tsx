"use client";

import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

const techStack = [
  { src: "/images/nextjss-.png", alt: "Next.js" },
  { src: "/images/reactr.png", alt: "React" },
  { src: "/images/tailwinder.png", alt: "Tailwind CSS" },
  { src: "/images/mongodb.png", alt: "MongoDB" },
  { src: "/images/docker.png", alt: "Docker" },
  { src: "/images/figmabw.png", alt: "Figma" },
];

export default function TechMarquee() {
  return (
    <section className="relative py-8 bg-[#efeeec] overflow-hidden">
      {/* Side Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-40 text-sm font-semibold text-black leading-tight">
        Working with <br /> Modern Technologies
      </div>

      {/* Left Progressive Blur */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-64 z-20 bg-gradient-to-r from-[#efeeec] via-[#efeeec]/80 to-transparent backdrop-blur-sm" />

      {/* Right Progressive Blur */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-64 z-20 bg-gradient-to-l from-[#efeeec] via-[#efeeec]/80 to-transparent backdrop-blur-sm" />

      {/* Marquee */}
      <Marquee pauseOnHover className="[--duration:40s] gap-24">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[180px] h-20"
          >
            <Image
              src={tech.src}
              alt={tech.alt}
              width={120}
              height={120}
              className="object-contain grayscale"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
