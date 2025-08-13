import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function AboutMe() {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-full mx-auto">
        <div className=" rounded-3xl p-8 md:p-12 lg:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-48 ">
            {/* Left side - Description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl  leading-relaxed font-medium">
                A passionate full-stack developer crafting digital experiences through innovative web solutions, modern
                design patterns & seamless user interactions for both businesses and individuals
              </p>
            </div>

            {/* Right side - Heading and Navigation */}
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight">
                  Building Digital{" "}
                  <span className="inline-flex items-center">
                    Experiences
                    <div className="ml-2 w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden bg-gray-300 flex-shrink-0">
                      <Image
                        src="/images/mesrati.jpg"
                        alt="Developer profile"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </span>
                </h2>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link
                  href="/about"
                  className="group flex items-center text-lg font-medium bg-white text-gray-800 hover:text-gray-600 transition-colors  px-6 py-4 rounded-full"
                >
                  My Story
                 <ArrowUpRight className="ml-2" />
                </Link>

                <Link
                  href="/myservices"
                  className="group flex items-center text-lg font-medium  hover:text-gray-600 transition-colors"
                >
                  My Services
                  <ArrowUpRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
