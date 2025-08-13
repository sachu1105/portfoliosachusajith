"use client";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Web Development" },
  { title: "UI/UX Designing" },
  { title: "Full Stack Development" },
  { title: "Next.js Development" },
  { title: "React Development" },
  { title: "SEO Optimization" },
  { title: "Performance Optimization" },
  { title: "Content Strategy" },
];

export default function MyServices() {
  return (
    <section className="py-20 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-7xl font-extrabold tracking-tight">My Services</h2>
          <a
            href="/myservices"
            className="flex items-center gap-2 px-6 py-4 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-medium hover:bg-neutral-300 transition"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services list */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="relative group p-6 border-b border-neutral-300 dark:border-neutral-700 flex items-center gap-4 overflow-hidden"
            >
              {/* Circle background for arrow */}

              {/* Arrow */}
              <ArrowUpRight className="flex-shrink-0 w-6 h-6 text-neutral-900 dark:text-white relative z-10 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

              {/* Text — visible by default, animates on hover */}
              <span className="text-4xl font-medium relative z-10 transition-transform duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] group-hover:-translate-y-1">
                {service.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
