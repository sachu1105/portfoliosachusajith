"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const technicalSkills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Next.js",
  "React.js",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Nginx",
];

export default function AboutDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[90vw] max-w-6xl bg-white dark:bg-[#0a0a0a] dark:text-white rounded-[20px] lg:rounded-[30px] shadow-2xl border border-gray-100 dark:border-white/10 p-5 lg:p-8 z-40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
        
        {/* Left Column: The Narrative */}
        <div className="flex flex-col justify-center">
          <p className="text-xs lg:text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
            A little about me
          </p>
          <h3 className="text-2xl lg:text-4xl font-semibold text-black dark:text-white mb-6 leading-tight tracking-tight">
            From zero-to-one builds to scaling full-stack platforms.
          </h3>
          <div className="space-y-4 text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I’ve spent the last 3+ years engineering and shipping products across AI, e-commerce, and enterprise tooling. I specialize in building solid product foundations—from custom responsive UIs to robust backend architectures that scale.
            </p>
            <p>
              While my recent work involves architecting secure, AI-integrated workflows and document intelligence pipelines for air-gapped environments, my core DNA is in full production ownership. I handle end-to-end delivery: writing high-performance React code on the frontend, and wiring up FastAPI, task queues, and Docker infrastructure on the backend.
            </p>
          </div>
        </div>

        {/* Right Column: Stats & Stack */}
        <div className=" dark:bg-white/5  border-l dark:border-white/10 p-6 lg:p-8 flex flex-col justify-between">
          <div className="space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl lg:text-5xl font-bold text-black dark:text-white tracking-tighter mb-1">
                  3+ <span className="text-lg lg:text-2xl font-medium text-gray-400">Years</span>
                </h4>
                <p className="text-xs lg:text-sm text-gray-500 font-medium">Full Stack Development</p>
              </div>
              <div>
                <h4 className="text-3xl lg:text-5xl font-bold text-black dark:text-white tracking-tighter mb-1">
                  4 <span className="text-lg lg:text-2xl font-medium text-gray-400">Cos.</span>
                </h4>
                <p className="text-xs lg:text-sm text-gray-500 font-medium">From Startups to Media</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-sm font-semibold text-black dark:text-white mb-3 uppercase tracking-wider">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs lg:text-sm px-3 py-1.5 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Quote/Philosophy */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">
              "I build with a focus on precision, removing external dependencies, and creating architectures that are closer to production from day one."
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-8 lg:mt-10">
        <Link
          href="/about"
          className="group flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 shadow-md"
        >
          View more
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}