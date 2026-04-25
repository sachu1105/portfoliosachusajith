"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NavbarDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[90vw] max-w-6xl
                 bg-white dark:bg-black dark:text-white rounded-[20px] lg:rounded-[30px] shadow-lg p-4 lg:p-8 z-40"
    >
      {/* Services Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {/* Web Development */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[5/3] mb-2 lg:mb-3">
            <Image
              src="/images/serviceone.jpg"
              alt="Web Development"
              fill
              className="object-cover rounded-lg lg:rounded-xl"
              sizes="(max-width: 768px) 45vw, (max-width: 1024px) 22vw, 200px"
            />
          </div>
          <h3 className="font-semibold text-sm lg:text-lg mb-1 line-clamp-2 text-black dark:text-white">
            Custom Web Development
          </h3>
          <p className="text-gray-600 text-xs lg:text-sm line-clamp-3 lg:line-clamp-none">
            Build scalable, fast, and secure websites using the latest web technologies.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[5/3] mb-2 lg:mb-3">
            <Image
              src="/images/servicetwo.jpg"
              alt="UI/UX Design"
              fill
              className="object-cover rounded-lg lg:rounded-xl"
              sizes="(max-width: 768px) 45vw, (max-width: 1024px) 22vw, 200px"
            />
          </div>
          <h3 className="font-semibold text-sm lg:text-lg mb-1 line-clamp-2 text-black dark:text-white">
            UI/UX Design
          </h3>
          <p className="text-gray-600 text-xs lg:text-sm line-clamp-3 lg:line-clamp-none">
            Create visually stunning and user-friendly interfaces that keep visitors engaged.
          </p>
        </div>

        {/* Full-Stack Solutions */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[5/3] mb-2 lg:mb-3">
            <Image
              src="/images/servicethree.jpg"
              alt="Full-Stack Solutions"
              fill
              className="object-cover rounded-lg lg:rounded-xl"
              sizes="(max-width: 768px) 45vw, (max-width: 1024px) 22vw, 200px"
            />
          </div>
          <h3 className="font-semibold text-sm lg:text-lg mb-1 line-clamp-2 text-black dark:text-white">
            Full-Stack Solutions
          </h3>
          <p className="text-gray-600 text-xs lg:text-sm line-clamp-3 lg:line-clamp-none">
            End-to-end development — from frontend design to backend architecture.
          </p>
        </div>

        {/* SEO Optimization */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[5/3] mb-2 lg:mb-3">
            <Image
              src="/images/servicefour.jpg"
              alt="SEO Optimization"
              fill
              className="object-cover rounded-lg lg:rounded-xl"
              sizes="(max-width: 768px) 45vw, (max-width: 1024px) 22vw, 200px"
            />
          </div>
          <h3 className="font-semibold text-sm lg:text-lg mb-1 line-clamp-2 text-black dark:text-white">
            SEO & Performance
          </h3>
          <p className="text-gray-600 text-xs lg:text-sm line-clamp-3 lg:line-clamp-none">
            Improve rankings, load times, and visibility to reach your target audience.
          </p>
        </div>
      </div>

      {/* View All Services Button */}
      <div className="flex justify-center mt-4 lg:mt-8">
        <Link
          href="/myservices"
          className="bg-black text-white px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-800 transition"
        >
          View All Services →
        </Link>
      </div>

      {/* Bottom Links - Hidden on mobile for space */}
      <div className="hidden lg:flex flex-wrap gap-6 mt-6 text-sm text-gray-600 border-t pt-4 justify-center">
        <Link href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
        <Link href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</Link>
      </div>
    </motion.div>
  );
}