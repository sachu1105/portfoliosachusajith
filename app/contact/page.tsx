import Link from "next/link";

const CONTACT = {
  email: "sachusajith170@gmail.com",
  linkedin: "https://www.linkedin.com/in/sachu-s-kumar",
  instagram: "https://www.instagram.com/sachu1105",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-orange-500 px-6 py-20 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[75vh] w-full max-w-5xl flex-col items-center justify-center text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">Contact</p>
        <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
          Let&apos;s work together
        </h1>
        <p className="mt-8 max-w-2xl text-base text-white/80 sm:text-lg">
          I&apos;m always open to new projects and collaborations. If you have a project in mind,
          let&apos;s connect and build something meaningful.
        </p>

        <div className="mt-10 space-y-1 text-sm text-white/90 sm:text-base">
          <p className="font-medium">Sachu Sajith</p>
          <a href={`mailto:${CONTACT.email}`} className="underline-offset-4 hover:underline">
            {CONTACT.email}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 px-6 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Instagram
          </Link>
          <Link
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 px-6 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
