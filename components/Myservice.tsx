"use client";
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
  },
  {
    title: "UI/UX Design",
    description:
      "User-first interfaces that balance beauty with function. I go from user research and wireframes to high-fidelity Figma prototypes — every interaction feels intentional and effortless.",
    features: ["User research & wireframing", "High-fidelity prototypes", "Design systems"],
    image: "/images/uiux.png",
  },
  {
    title: "API & Backend Development",
    description:
      "Scalable, secure backends built for real traffic. I design database schemas, build authentication flows, set up background workers, and integrate third-party services with clean, maintainable code.",
    features: ["Node.js / PostgreSQL / Redis", "Auth & authorization flows", "Background jobs & queues"],
    image: "/images/webdev.png",
  },
  {
    title: "SEO & Performance",
    description:
      "Speed and visibility are not afterthoughts. I optimize Core Web Vitals, implement technical SEO, add structured data, and set up caching strategies so your site ranks and loads fast.",
    features: ["Core Web Vitals & Lighthouse", "Technical & on-page SEO", "Caching & lazy loading"],
    image: "/images/seo.png",
  },
  {
    title: "Technical Consulting",
    description:
      "Stuck on architecture decisions, choosing a tech stack, or dealing with performance bottlenecks? I do pragmatic code audits and system design reviews with direct, actionable recommendations.",
    features: ["System design & architecture", "Code & tech stack audits", "Scalability planning"],
    image: "/images/techincal.png",
  },
];

export default function ServicesScroll() {
  return (
    <div className="relative w-full mt-28">
      {/* Header Section */}
      <div className="relative px-6 py-12">
        <div className="max-w-full mx-auto flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="flex items-center gap-4">
            <h1 className="text-6xl lg:text-8xl font-bold">My</h1>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/images/serviceone.jpg"
                alt="Team"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold">Services</h1>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 max-w-md">
            <p className="text-xl font-semibold text-left lg:text-right">
              We push users along the funnel through performance driven content
              marketing
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 text-lg rounded-full bg-white dark:bg-gray-700 border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              Connect With Me
            </Link>
          </div>
        </div>
      </div>
      <div className="relative dark:bg-gray-900">
        {services.map((service, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen border-t-2 border-gray-300 dark:border-gray-700"
            style={{
              zIndex: index, // lower index at bottom
              background: "#efeeec",
              marginTop: index === 0 ? "0" : "-10vh",
            }}
          >
            <div className="h-full flex flex-col justify-center px-8 dark:bg-black">
              <div className="max-w-full mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl lg:text-5xl font-medium leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-lg leading-relaxed font-bold max-w-lg pt-38">
                      {service.description}
                    </p>
                    <div className="space-y-3 flex gap-4 ">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>• {feature}</div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative"
                  >
                    <div className="relative h-64 lg:h-[400px] w-full rounded-2xl overflow-hidden">
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
