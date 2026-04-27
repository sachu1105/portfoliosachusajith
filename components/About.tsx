import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, LayoutGrid } from "lucide-react";

export default function AboutMe() {
  const mobileCta =
    "max-lg:inline-flex max-lg:min-h-11 max-lg:flex-1 max-lg:items-center max-lg:justify-center max-lg:gap-2 max-lg:rounded-full max-lg:px-4 max-lg:py-2.5 max-lg:text-sm max-lg:font-medium max-lg:transition sm:max-lg:min-h-12 sm:max-lg:px-5 sm:max-lg:py-3 sm:max-lg:text-base";

  return (
    <section className="w-full px-4 py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-full">
        <div className="rounded-3xl p-5 sm:p-8 md:p-12 lg:p-4">
          {/* Below lg: tight vertical rhythm (no min-height / flex-1 stretch). lg+: two-column grid. */}
          <div className="flex max-lg:flex-col max-lg:gap-4 lg:grid lg:min-h-0 lg:grid-cols-2 lg:items-start lg:gap-x-48 lg:gap-y-8">
            <p className="order-2 max-w-3xl text-base font-medium leading-relaxed sm:text-lg md:text-xl lg:order-none lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:text-2xl">
              A passionate full-stack developer crafting digital experiences through innovative web solutions, modern
              design patterns & seamless user interactions for both businesses and individuals
            </p>

            <h2 className="order-1 text-4xl font-bold leading-[1.12] max-lg:text-3xl max-lg:sm:text-4xl max-lg:md:text-5xl md:text-5xl lg:order-none lg:col-start-2 lg:row-start-1 lg:leading-tight lg:text-6xl">
              Building Digital{" "}
              <span className="inline-flex items-center">
                Experiences
                <span className="ml-2 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gray-300 md:h-16 md:w-16">
                  <Image
                    src="/images/design.png"
                    alt="Design and development"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </span>
              </span>
            </h2>

            <div className="order-3 flex w-full max-w-md flex-row justify-center gap-3 self-center sm:max-w-none lg:order-none lg:col-start-2 lg:row-start-2 lg:mt-0 lg:max-w-none lg:flex lg:flex-row lg:justify-start lg:gap-8">
              <Link
                href="/about"
                className={`${mobileCta} group max-lg:bg-white max-lg:text-gray-800 max-lg:hover:bg-neutral-100 lg:flex lg:items-center lg:rounded-full lg:bg-white lg:px-6 lg:py-4 lg:text-lg lg:font-medium lg:text-gray-800 lg:transition-colors lg:hover:text-gray-600`}
              >
                My Story
                <ArrowRight className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem] lg:hidden" aria-hidden />
                <ArrowUpRight className="ml-2 hidden shrink-0 lg:inline" aria-hidden />
              </Link>

              <Link
                href="/myservices"
                className={`${mobileCta} group max-lg:border max-lg:border-neutral-300 max-lg:bg-neutral-50/80 max-lg:text-gray-800 max-lg:hover:bg-neutral-100 lg:flex lg:items-center lg:border-transparent lg:bg-transparent lg:px-0 lg:py-4 lg:text-lg lg:font-medium lg:transition-colors lg:hover:text-gray-600`}
              >
                My Services
                <LayoutGrid className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem] lg:hidden" aria-hidden />
                <ArrowUpRight className="ml-2 hidden shrink-0 lg:inline" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
