"use client";

export default function StorySection() {
  return (
    <section className="bg-[#efeeec] dark:bg-black py-14 md:py-24 px-6 md:px-10 lg:px-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        
        {/* Massive Intro Statement */}
        <div className="mb-16 md:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-black dark:text-white leading-[1.1]">
            I started by making things <br className="hidden md:block" />
            <span className="italic font-serif text-black/50 dark:text-white/50">look good.</span>{" "}
            Then I wanted <br className="hidden md:block" />
            them to actually <span className="font-bold">work.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl font-medium text-black/70 dark:text-white/70 max-w-2xl">
            Designer turned developer turned system builder. The journey wasn&apos;t planned — it just kept going deeper.
          </p>
        </div>

        {/* Split Layout: The Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-12 mb-14 md:mb-32 relative">
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-red-500/80 sticky top-24">
              01 — The Story
            </h3>
          </div>
          <div className="md:col-span-8 lg:col-span-9 space-y-6 md:space-y-8 text-lg md:text-xl text-black/60 dark:text-white/80 font-light leading-relaxed max-w-3xl ">
            <p>
              It started with pixels. I spent the early part of my career as a UI/UX designer — obsessing over spacing, color, and how things felt to use. But somewhere along the way I got frustrated. I kept handing off designs and wondering why the final product never matched the vision. So I decided to learn how to build it myself.
            </p>
            <p>
              That curiosity pulled me toward <strong className="font-medium text-black dark:text-white">React and Next.js</strong>. I liked that I could take something I designed and make it real. But then I hit the next wall — I didn&apos;t understand what was happening on the other side. I chose to do my MCA not for the degree, but for the foundation. I wanted to understand how systems actually work.
            </p>
            <p>
              Each job taught me a new layer. At <strong className="font-medium text-black dark:text-white">SMBS</strong>, I laid the backend basics while owning the frontend. At <strong className="font-medium text-black dark:text-white">IhubRobotics</strong>, I got real backend reps — APIs, data flows, LLM integration for a patient intake system that actually reduced manual effort by 40%.
            </p>
            <p>
              At <strong className="font-medium text-black dark:text-white">Malayala Manorama</strong>, I crossed over fully. I&apos;m now designing system architecture, deploying full-stack apps on air-gapped infrastructure, and integrating local LLMs for internal tooling — production-grade, no external API dependency.
            </p>
          </div>
        </div>

        {/* Split Layout: How I Build */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-12 mb-14 md:mb-32 relative">
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-red-500/80 sticky top-24">
              02 — How I Build
            </h3>
          </div>
          <div className="md:col-span-8 lg:col-span-9 space-y-6 md:space-y-8 text-lg md:text-xl text-black/60 dark:text-white/80 font-light leading-relaxed max-w-3xl">
            <p>
              I don&apos;t open a code editor first. I start by collecting requirements, then I sketch the system — what the data flow looks like, where the bottlenecks will be, what trade-offs I&apos;m making. I choose the stack based on what the project actually needs, not what I&apos;m comfortable with.
            </p>
            <p>
              Once the architecture makes sense on paper, I use Cursor plan mode to lay the backend foundation — <strong className="font-medium text-black dark:text-white">FastAPI or Node.js</strong> depending on the job. Then I move to the frontend. I pull inspiration from Dribbble, Behance, and Awwwards, feed ideas into Claude or Gemini, prototype in Figma, and ship it in Next.js. Frontend and backend connect at the end, and then I stress-test the performance from every angle I can find.
            </p>
            <p>
              Cost-effectiveness isn&apos;t an afterthought — it&apos;s a constraint I design around from day one. I&apos;m still learning system design — honestly and openly. But I&apos;m not waiting until I&apos;m &quot;ready&quot; to build real things. The projects at Manorama taught me more about architecture than any course could.
            </p>
          </div>
        </div>

        {/* Footer / CTA Area */}
        <div className="border-t border-black/10 dark:border-white/10 pt-10 md:pt-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h4 className="max-w-4xl text-2xl md:text-[2.6rem] font-light tracking-tight leading-[1.2] text-black dark:text-white">
              If you&apos;re building something that needs both design thinking and engineering depth,{" "}
              <span className="font-medium">let&apos;s talk.</span>
            </h4>
            <div className="text-left md:text-right">
              <p className="text-base md:text-lg font-semibold text-black dark:text-white uppercase tracking-[0.14em]">
                Sachu S Kumar
              </p>
              <p className="text-sm text-black/60 dark:text-white/50 mt-1">
                Ernakulam, Kerala · Open to new problems
              </p>
            </div>
          </div>

       
        </div>

      </div>
    </section>
  );
}