"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const technicalSkills = [
  { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
  { name: "TypeScript", icon: "https://img.icons8.com/color/48/typescript.png" },
  { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
  { name: "Next.js", icon: "https://img.icons8.com/color/48/nextjs.png" }, // Swap if Icons8 changes this route
  { name: "React.js", icon: "https://img.icons8.com/color/48/react-native.png" },
  { name: "FastAPI", icon: "https://img.icons8.com/color/48/api-settings.png" }, // Generic API icon fallback
  { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
  { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
  { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
  { name: "Redis", icon: "https://img.icons8.com/color/48/redis.png" },
  { name: "Docker", icon: "https://img.icons8.com/color/48/docker.png" },
  { name: "Nginx", icon: "https://img.icons8.com/color/48/nginx.png" },
];

export default function AboutMe() {
  return (
    <section className="mx-auto mt-1 w-[90vw] max-w-6xl bg-white dark:bg-[#0a0a0a] dark:text-white rounded-[20px] lg:rounded-[30px] border border-gray-100 dark:border-white/10 p-5 lg:p-8 z-40">

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">

        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <p className="text-xs lg:text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
            A little about me
          </p>
          <h3 className="text-2xl lg:text-3xl font-semibold text-black dark:text-white mb-6 leading-tight tracking-tight">
            From pixel-perfect UI to production-grade systems — I build both ends.
          </h3>
          <div className="space-y-4 text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I started as a UI/UX designer. Got frustrated watching my designs get built wrong,
              so I learned to build them myself. That rabbit hole led to React, then Node.js,
              then FastAPI, then system architecture. Three years later, I own the full stack.
            </p>
            <p>
              My work lives at the intersection of design and engineering — AI pipelines,
              document intelligence, full production ownership from architecture to deployment.
              I&apos;ve gone from designing screens to owning the systems behind them, and that
              context makes a real difference in how I build.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="dark:bg-white/5 lg:border-l lg:dark:border-white/10 p-6 lg:p-8 flex flex-col justify-between">
          <div className="space-y-8">

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl lg:text-5xl font-bold text-black dark:text-white tracking-tighter mb-1">
                  3+ <span className="text-lg lg:text-2xl font-medium text-gray-400">Yrs</span>
                </h4>
                <p className="text-xs lg:text-sm text-gray-500 font-medium">Building in production</p>
              </div>
              <div>
                <h4 className="text-3xl lg:text-5xl font-bold text-black dark:text-white tracking-tighter mb-1">
                  4 <span className="text-lg lg:text-2xl font-medium text-gray-400">Cos.</span>
                </h4>
                <p className="text-xs lg:text-sm text-gray-500 font-medium">Each role, deeper than the last</p>
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
                    key={skill.name}
                    className="flex items-center gap-2 text-xs lg:text-sm px-3 py-1.5 rounded-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {/* 2. Standard img tag used here to bypass Next.js external domain config requirements for quick setup */}
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="w-4 h-4 object-contain"
                      loading="lazy"
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">
              &quot;I don&apos;t open the editor first. I sketch the system, pick the right stack
              for the job, then build it cost-effectively from day one.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8 lg:mt-10">
        <Link
          href="/about"
          className="group flex items-center gap-2   px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 hover:text-orange-500 dark:hover:text-orange-500"
        >
          View more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}