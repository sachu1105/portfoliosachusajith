"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "What services do you provide?",
    answer:
      "I provide design, full-stack development, and performance-focused delivery from strategy and wireframing to deployment and ongoing optimization.",
  },
  {
    question: "Can you manage a project from concept to launch?",
    answer:
      "Yes. I can own discovery, UX/UI, frontend and backend development, integrations, testing, deployment, and post-launch support.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, I work with clients globally and collaborate remotely with clear async updates, milestone tracking, and scheduled calls when needed.",
  },
  {
    question: "Can you also create animations?",
    answer:
      "Yes. I create purposeful motion and micro-interactions using GSAP and modern frontend tooling to improve usability and polish.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I commonly work with React, Next.js, TypeScript, Tailwind CSS, FastAPI, PostgreSQL, Redis, Docker, Nginx, and TanStack Query.",
  },
  {
    question: "Do you offer support or updates after launch?",
    answer:
      "Yes, I offer post-launch support plans including bug fixes, performance tuning, SEO updates, and feature improvements.",
  },
];

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="w-full border-t border-gray-300 bg-[#efeeec] px-6 py-16 dark:border-gray-800 dark:bg-black sm:px-10 lg:px-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Area */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <h2 className="text-6xl font-bold uppercase leading-none tracking-tight text-black dark:text-white sm:text-7xl lg:text-8xl">
            FAQ
          </h2>
          
          {/* CTA Group - Left aligned on mobile, right aligned on desktop */}
          <div className="flex flex-col items-start lg:items-end gap-5">
            <p className="max-w-xs text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 lg:text-right">
              Can&apos;t find the answer you&apos;re looking for? 
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black dark:border-white px-7 py-2.5 text-sm font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-black"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>

        {/* Accordion Area */}
        <div className="space-y-2">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={item.question} className="border-b border-gray-300 dark:border-gray-800 transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-black dark:text-white sm:text-2xl group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {item.question}
                  </span>
                  
                  {/* Animated Plus/Minus Icon */}
                  <div className="relative flex h-6 w-6 items-center justify-center text-black dark:text-white">
                    <span className={`absolute h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className={`absolute h-full w-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : ''}`} />
                  </div>
                </button>

                {/* Content Area with smooth height logic fallback */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden max-w-4xl text-base text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}