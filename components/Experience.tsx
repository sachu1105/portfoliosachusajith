"use client";

import React, { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { 
  Newspaper, 
  Bot, 
  Code2, 
  Layout, 
  ArrowRight 
} from "lucide-react";

const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Malayamanorama",
    role: "Full Stack Developer",
    date: "Dec 2025 - Present",
    description: "Internal full-stack applications",
    bullets: [
      "Architected system design to production deployment.",
      "Integrated local LLM models into internal tooling.",
      "Deployed and maintained on air-gapped server infrastructure."
    ],
    icon: Newspaper,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    company: "IhubRobotics",
    role: "Full Stack Developer",
    date: "May 2025 - Nov 2025",
    description: "AI-assisted patient interaction",
    bullets: [
      "Engineered automated intake workflows with Next.js and FastAPI.",
      "Implemented chatbot data capture, reducing manual effort by 40%.",
      "Integrated LLM-based processing for summarization."
    ],
    icon: Bot,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 3,
    company: "SMBS Infolab LLC",
    role: "Front-End Developer",
    date: "Dec 2024 - Apr 2025",
    description: "High-performance cert management",
    bullets: [
      "Created certificate application using React, Vite, and Tailwind.",
      "Developed a browser-based certificate editor using React Konva.js.",
      "Led frontend implementation for an e-commerce platform."
    ],
    icon: Code2,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 4,
    company: "Bringmebis",
    role: "Junior Front-End Developer",
    date: "Oct 2020 - Sep 2022",
    description: "Client-facing systems",
    bullets: [
      "Built reusable UI components using React and modern practices.",
      "Produced wireframes and UI prototypes using Figma.",
      "Delivered SEO-optimized web applications and improved usability."
    ],
    icon: Layout,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
  },
];

export default function ExperienceSwipe() {
  const [cards, setCards] = useState(EXPERIENCE_DATA);

  const SWIPE_THRESHOLD = 100;

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // Check if dragged far enough left or right
    const isSwiped = Math.abs(info.offset.x) > SWIPE_THRESHOLD;

    if (isSwiped) {
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        if (topCard) newCards.push(topCard); // Pushes it to the back of the array
        return newCards;
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-[#efeeec] dark:bg-neutral-950 py-10 overflow-hidden">
      
      {/* Top Pill */}
      <div className="px-4 py-1.5 mb-12 border border-gray-400 dark:border-white/10 rounded-full  dark:bg-neutral-900 text-sm text-gray-600 dark:text-gray-300 font-medium z-10">
        Experience
      </div>

      {/* Cards Container */}
      <div className="relative w-[320px] h-[440px] sm:w-[380px] sm:h-[480px]">
        {/* Notice we removed AnimatePresence so cards NEVER vanish */}
        {cards.map((card, index) => {
          const isTopCard = index === 0;
          const Icon = card.icon;
          
          // Math for the fanned deck look
          const rotation = isTopCard ? 0 : index * 4; 
          const xOffset = isTopCard ? 0 : index * 14;
          const yOffset = index * 8;
          const scale = 1 - index * 0.05;

          return (
            <motion.div
            key={card.id}
            style={{
              zIndex: cards.length - index,
            }}
            animate={{
              // FIX: Set opacity permanently to 1 so backgrounds remain solid
              opacity: 1, 
              scale: scale,
              x: xOffset,
              y: yOffset,
              rotate: rotation,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 22,
              mass: 1,
            }}
              // Drag Configuration
              drag={isTopCard ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }} // Causes it to spring back
              dragElastic={0.8}
              whileDrag={{ scale: 1.02, cursor: "grabbing" }}
              onDragEnd={isTopCard ? handleDragEnd : undefined}
              className={`absolute inset-0 origin-bottom bg-white dark:bg-[#111] border border-gray-100 dark:border-white/10 rounded-[32px] shadow-2xl p-6 sm:p-8 flex flex-col ${
                isTopCard ? "cursor-grab hover:shadow-gray-500/10" : "pointer-events-none shadow-sm"
              }`}
            >
              {/* Header: Icon & Date */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${card.bgColor} ${card.iconColor}`}>
                  <Icon size={24} strokeWidth={2.5} />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-medium tracking-tight mt-1">
                  {card.date}
                </span>
              </div>

              {/* Body: Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
                  {card.company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
                  {card.description}
                </p>
                
                {/* Bullets */}
                <ul className="space-y-3">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Role */}
              <div className="mt-auto pt-6 flex justify-end border-t border-transparent">
                <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white tracking-tight">
                  {card.role}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Swipe Indicator */}
      <div className="mt-16 flex items-center gap-3 text-gray-400 dark:text-gray-500 font-medium z-10">
        <ArrowRight size={18} className="animate-pulse rotate-180" />
        <span className="text-sm uppercase tracking-widest">Swipe</span>
        <ArrowRight size={18} className="animate-pulse" />
      </div>

    </div>
  );
}