"use client";

import React from "react";

type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "01",
    title: "Design",
    items: [
      "Web design","UX & UI Design",
      "Interaction design", "Wireframe"
    ],
  },
  {
    id: "02",
    title: "Development",
    items: [
      "Front-end development", "Back-end development", "Database Design & Management",
      "Search engine optimization (SEO)", "Responsive Development", "API Integration",
      "Deployment & Hosting", "Micro-interactions",
    ],
  },
  {
    id: "03",
    title: "Technologies",
    items: [
      "React", "Next.js", "TypeScript", "Tailwind CSS",
      "FastAPI","PostgreSQL", "Redis",
      "Docker", "Nginx",
      "TanStack Query", "GSAP",
      "Git & Version Control"
    ],
  }
];

export default function SkillsSection() {
  return (
    <section className="bg-[#efeeec] dark:bg-black py-8 px-6 md:px-10 lg:px-16 transition-colors duration-300">
      <div className="mx-auto ">
        
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-24 items-start">
          {skillGroups.map((group) => (
            <div key={group.id} className="group relative">
              
              {/* ID Number - Positioned slightly above and left */}
              <span className="block mb-2 text-[10px] font-bold text-red-500/80 tracking-widest">
                {group.id}
              </span>

           
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter text-black dark:text-white leading-[0.9] mb-8 break-words">
                {group.title}
              </h2>

              <ul className="space-y-3  pt-6">
                {group.items.map((item) => (
                  <li 
                    key={item} 
                    className="text-base lg:text-lg font-normal text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}