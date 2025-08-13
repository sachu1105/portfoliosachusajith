"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DockDemo } from "./SocialTags";

export default function Footer() {
  return (
    <div className=" dark:bg-neutral-900 px-4 md:px-8 lg:px-6 py-6">
      <footer className="bg-white dark:bg-black rounded-3xl overflow-hidden shadow-lg">
        <div className="max-w-full mx-auto px-6 md:px-12 py-12">
          
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            
            {/* Left Column - Newsletter */}
            <div className="flex-1 max-w-md">
              <h3 className="text-3xl font-bold mb-4">Connect with me</h3>
              <div className="flex items-center dark:bg-neutral-900 rounded-full overflow-hidden border border-neutral-700">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-3 bg-transparent text-white placeholder-neutral-500 outline-none"
                />
                <button className="bg-[#A8F5E1] p-3 rounded-full shrink-0 m-1 hover:scale-105 transition">
                  <ArrowUpRight className="text-black" size={20} />
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-4">
                <DockDemo />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-8 text-lg font-medium">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                My Story
              </Link>
              <Link href="/testimonials" className="hover:underline">
                Skills
              </Link>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </div>
          </div>

          {/* Big Brand Text */}
          <div className="w-full mt-12">
            <h1 className="w-full font-bold tracking-tight text-[clamp(2rem,13vw,13rem)] leading-none text-center lg:text-left px-6 md:px-12">
              Carbon&nbsp;Form
            </h1>
          </div>

          {/* Bottom Row */}
          <div className="mt-8 border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Carbon Form. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
