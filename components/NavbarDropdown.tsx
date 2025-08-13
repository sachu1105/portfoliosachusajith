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
      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[100%] max-w-7xl
                 bg-white rounded-[30px] shadow-lg p-8 z-40"
    >
      {/* Overview Heading */}
      {/* <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">Our Core Services</h2>
        <p className="text-gray-600 text-sm mt-1">
          From idea to deployment — we craft digital solutions that deliver results.
        </p>
      </div> */}

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
        {/* Web Development */}
        <div className="min-w-[200px] max-w-[250px]">
          <Image
            src="/images/serviceone.jpg"
            alt="Web Development"
            width={250}
            height={150}
            className="block w-full h-[150px] object-cover rounded-xl mb-3"
          />
          <h3 className="font-semibold text-lg mb-1">Custom Web Development</h3>
          <p className="text-gray-600 text-sm">
            Build scalable, fast, and secure websites using the latest web technologies.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="min-w-[200px] max-w-[250px]">
          <Image
            src="/images/servicetwo.jpg"
            alt="UI/UX Design"
            width={250}
            height={150}
            className="block w-full h-[150px] object-cover rounded-xl mb-3"
          />
          <h3 className="font-semibold text-lg mb-1">UI/UX Design</h3>
          <p className="text-gray-600 text-sm">
            Create visually stunning and user-friendly interfaces that keep visitors engaged.
          </p>
        </div>

        {/* Full-Stack Solutions */}
        <div className="min-w-[200px] max-w-[250px]">
          <Image
            src="/images/servicethree.jpg"
            alt="Full-Stack Solutions"
            width={250}
            height={150}
            className="block w-full h-[150px] object-cover rounded-xl mb-3"
          />
          <h3 className="font-semibold text-lg mb-1">Full-Stack Solutions</h3>
          <p className="text-gray-600 text-sm">
            End-to-end development — from frontend design to backend architecture.
          </p>
        </div>

        {/* SEO Optimization */}
        <div className="min-w-[200px] max-w-[250px]">
          <Image
            src="/images/servicefour.jpg"
            alt="SEO Optimization"
            width={250}
            height={150}
            className="block w-full h-[150px] object-cover rounded-xl mb-3"
          />
          <h3 className="font-semibold text-lg mb-1">SEO & Performance</h3>
          <p className="text-gray-600 text-sm">
            Improve rankings, load times, and visibility to reach your target audience.
          </p>
        </div>
      </div>

      {/* View All Services Button */}
      <div className="flex justify-center mt-8">
        <Link
          href="/myservices"
          className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          View All Services →
        </Link>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600 border-t pt-4 justify-center">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms & Conditions</Link>
      </div>
    </motion.div>
  );
}
