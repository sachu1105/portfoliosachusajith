"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";

const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web applications — from pixel-perfect React/Next.js frontends to robust Node.js backends. I handle SSR, SSG, REST APIs, database design, and deployment so you get a complete, production-ready product.",
    features: ["React & Next.js (SSR/SSG)", "REST API development", "Database integration"],
    image: "/images/fullstack.png",
    index: "01",
  },
  {
    title: "UI/UX Design",
    description:
      "User-first interfaces that balance beauty with function. I go from user research and wireframes to high-fidelity Figma prototypes — every interaction feels intentional and effortless.",
    features: ["User research & wireframing", "High-fidelity prototypes", "Design systems"],
    image: "/images/uiux.png",
    index: "02",
  },
  {
    title: "API & Backend Development",
    description:
      "Scalable, secure backends built for real traffic. I design database schemas, build authentication flows, set up background workers, and integrate third-party services with clean, maintainable code.",
    features: ["Node.js / PostgreSQL / Redis", "Auth & authorization flows", "Background jobs & queues"],
    image: "/images/webdev.png",
    index: "03",
  },
  {
    title: "SEO & Performance",
    description:
      "Speed and visibility are not afterthoughts. I optimize Core Web Vitals, implement technical SEO, add structured data, and set up caching strategies so your site ranks and loads fast.",
    features: ["Core Web Vitals & Lighthouse", "Technical & on-page SEO", "Caching & lazy loading"],
    image: "/images/seo.png",
    index: "04",
  },
  {
    title: "Technical Consulting",
    description:
      "Stuck on architecture decisions, choosing a tech stack, or dealing with performance bottlenecks? I do pragmatic code audits and system design reviews with direct, actionable recommendations.",
    features: ["System design & architecture", "Code & tech stack audits", "Scalability planning"],
    image: "/images/techincal.png",
    index: "05",
  },
];

export default function ServicesScroll() {
  // Same lazy-init pattern as FeaturedWork — reads window at mount,
  // so the correct layout renders on the very first paint.
  const [isMobile, setIsMobile] = useState<boolean>(
    () => typeof window !== "undefined" && window.innerWidth < 1024
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ─── SHARED HEADER (used in both mobile and desktop) ──────────────────────
  // Extracted so we don't duplicate it — DRY principle.
  const Header = () => (
    <div className="relative px-5 sm:px-8 lg:px-12 py-10 lg:py-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        {/* Title row — on mobile we scale down to text-5xl so it fits */}
        <div className="flex items-center gap-3 lg:gap-5 flex-wrap">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-none">My</h1>
          {/* Avatar circle */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/serviceone.jpg"
              alt="Services"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-none">Services</h1>
        </div>

        {/* Subtitle + CTA — on mobile this sits below the title, left-aligned */}
        <div className="flex flex-col gap-4 lg:items-end lg:max-w-md">
          <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 lg:text-right">
            Building digital experiences that are fast, intuitive, and built to scale.
          </p>
          <Link
            href="/contact"
            className="self-start lg:self-auto px-6 py-2.5 text-base rounded-full bg-white dark:bg-gray-700 border border-black dark:border-gray-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            Connect With Me
          </Link>
        </div>
      </div>
    </div>
  );

  // ─── MOBILE VIEW ─────────────────────────────────────────────────────────
  // Why a completely different mobile view?
  // The sticky stacking effect requires each card to be `h-screen` so the
  // next card peeks from below as you scroll past it. On mobile, a single
  // column layout inside `h-screen` means: image (256px) + big title +
  // long description + 3 features — all crammed into ~700px with no room
  // to breathe. Instead we use a clean vertical card list, which is a
  // well-understood mobile pattern for service pages.
  if (isMobile) {
    return (
      <div className="relative w-full mt-16 sm:mt-24">
        <Header />

        <div className="px-4 sm:px-6 pb-10 space-y-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true, amount: 0.15 }}
              // `once: true` on mobile — we don't want cards re-animating
              // as the user scrolls back up. It feels jittery on touch.
              className="rounded-2xl overflow-hidden bg-[#efeeec] dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800"
            >
              {/* Image on top — mobile users scan top-to-bottom, so the
                  visual context comes first, then the explanation */}
              <div className="relative w-full h-52 sm:h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Index badge — gives a sense of "there are more below" */}
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-mono px-2 py-1 rounded-full">
                  {service.index}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features as a vertical list on mobile — the original
                    `flex gap-4` causes text to overflow on narrow screens
                    because feature strings are long (20+ chars each) */}
                <ul className="space-y-1.5 pt-1">
                  {service.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <FaqSection />
      </div>
    );
  }

  // ─── DESKTOP VIEW ────────────────────────────────────────────────────────
  // The sticky stacking effect. Each card is exactly `h-screen`, stacked
  // with `position: sticky; top: 0`. The negative marginTop pulls the next
  // card up so it overlaps and "reveals" from below as you scroll.
  // `zIndex: index` ensures later cards sit ON TOP of earlier ones.
  return (
    <div className="relative w-full mt-28">
      <Header />

      <div className="relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen border-t-2 border-gray-300 dark:border-gray-700"
            style={{
              zIndex: index,
              background: "#efeeec",
              // Why -10vh margin? Each card peeks 10% from below the current
              // card, giving the user a visual cue that more content exists.
              marginTop: index === 0 ? "0" : "-10vh",
            }}
          >
            <div className="h-full flex flex-col justify-center px-8 xl:px-16 dark:bg-black">
              <div className="max-w-full mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                  {/* Left — Text content */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Service index — editorial detail */}
                    <span className="text-sm font-mono text-gray-400 dark:text-gray-500">
                      {service.index} / {String(services.length).padStart(2, "0")}
                    </span>

                    <h2 className="text-4xl xl:text-5xl font-medium leading-tight">
                      {service.title}
                    </h2>

                    {/* FIXED: was `pt-38` (152px!) — now `pt-2` */}
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-lg pt-2">
                      {service.description}
                    </p>

                    {/* FIXED: was `flex gap-4` — long feature strings overflow
                        on medium screens. `flex-wrap` lets them break naturally. */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {service.features.map((feature, fi) => (
                        <div
                          key={fi}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right — Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative"
                  >
                    <div className="relative h-[400px] xl:h-[440px] w-full rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FaqSection />
    </div>
  );
}