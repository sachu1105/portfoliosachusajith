import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Full Stack Development" },
  { title: "UI/UX Designing" },
  { title: "API & Backend Development" },
  { title: "SEO & Performance" },
  { title: "Technical Consulting" },
];

export default function MyServices() {
  return (
    <section className="w-full px-6 py-12 sm:px-8 sm:py-16 md:py-20 dark:bg-neutral-900">
      {/* FIX: Changed max-w-full to max-w-6xl. 
        This acts as a structural boundary, preventing the grid from stretching 
        indefinitely on ultrawide monitors.
      */}
      <div className="mx-auto w-full max-w-7xl">
        
        {/* Header Area */}
        <div className="mb-10 flex flex-col items-center gap-5 text-center md:mb-16 md:flex-row md:items-end md:justify-between md:gap-8 md:text-left">
          <h2 className="text-4xl font-extrabold tracking-tight leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            My Services
          </h2>
          <Link
            href="/myservices"
            className="hidden w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-100 px-5 py-3 text-sm font-medium transition hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:px-6 sm:py-3.5 sm:text-base md:inline-flex md:self-end"
          >
            <span className="whitespace-nowrap">View All Services</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid gap-x-12 gap-y-0 md:grid-cols-2 lg:gap-x-20">
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="relative flex min-h-[4.5rem] items-center gap-4 overflow-hidden border-b border-neutral-300 px-0 py-6 dark:border-neutral-700 sm:min-h-[5rem] group"
            >
              <ArrowUpRight className="relative z-10 h-6 w-6 shrink-0 translate-y-6 text-neutral-900 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 dark:text-white" />

              <span className="relative z-10 text-xl font-medium leading-snug transition-transform duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)] group-hover:-translate-y-1 sm:text-2xl md:text-3xl">
                {service.title}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/myservices"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-100 px-5 py-3 text-sm font-medium transition hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 sm:px-6 sm:py-3.5 sm:text-base"
          >
            <span className="whitespace-nowrap">View All Services</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}