import Link from "next/link";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

const CONTACT = {
  email: "sachusajith170@gmail.com",
  linkedin: "https://www.linkedin.com/in/sachu-s-kumar",
  instagram: "https://www.instagram.com/sachu1105",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#efeeec] px-6 py-20 text-slate-900 dark:bg-black dark:text-white sm:px-10 lg:px-16">
      <InteractiveGridPattern
        className="absolute inset-0 z-0 h-full w-full opacity-60 dark:opacity-45 [mask-image:radial-gradient(ellipse_at_center,white_35%,transparent_90%)]"
        squaresClassName="stroke-orange-300/60 dark:stroke-orange-500/30 hover:fill-orange-400/40 dark:hover:fill-orange-500/30"
        width={22}
        height={22}
        squares={[90, 56]}
        preserveAspectRatio="none"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.16),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_60%)]" />
      <div className="relative mx-auto flex min-h-[75vh] w-full max-w-5xl flex-col items-center justify-center text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">Contact</p>
        <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
          Let&apos;s work together
        </h1>
        <p className="mt-8 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          I&apos;m always open to new projects and collaborations. If you have a project in mind,
          let&apos;s connect and build something meaningful.
        </p>

        <div className="mt-10 space-y-1 text-sm text-slate-700 dark:text-slate-200 sm:text-base">
          <p className="font-medium">Sachu Sajith</p>
          <a href={`mailto:${CONTACT.email}`} className="underline-offset-4 hover:text-orange-600 hover:underline dark:hover:text-orange-400">
            {CONTACT.email}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-orange-400/70 px-6 py-2 text-sm font-medium text-slate-900 transition hover:bg-orange-500 hover:text-white dark:text-white dark:hover:bg-orange-500"
          >
            Instagram
          </Link>
          <Link
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-orange-400/70 px-6 py-2 text-sm font-medium text-slate-900 transition hover:bg-orange-500 hover:text-white dark:text-white dark:hover:bg-orange-500"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
