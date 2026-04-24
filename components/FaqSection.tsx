"use client";

import { useState } from "react";

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
    <section className="w-full border-t border-gray-300 bg-[#efeeec] px-6 py-16 dark:border-gray-700 dark:bg-black sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <h2 className="text-6xl font-bold uppercase leading-none sm:text-7xl lg:text-8xl">FAQ</h2>
          <p className="max-w-xs text-sm text-gray-600 dark:text-gray-300">
            Can&apos;t find the answer you&apos;re looking for? Let&apos;s talk.
          </p>
        </div>

        <div className="space-y-1">
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={item.question} className="border-b border-gray-300 py-2 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-lg font-medium sm:text-2xl">{item.question}</span>
                  <span className="text-2xl leading-none">{isOpen ? "-" : "+"}</span>
                </button>

                {isOpen && (
                  <p className="max-w-4xl pb-4 text-base text-gray-700 dark:text-gray-300">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
