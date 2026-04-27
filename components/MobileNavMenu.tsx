"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Story", href: "/about" },
  { name: "Services", href: "/myservices" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export default function MobileNavMenu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/95 z-40 lg:hidden flex flex-col items-center justify-center"
    >
      {/* Theme Toggler in top right */}
      <div className="absolute top-6 right-6">
        <AnimatedThemeToggler />
      </div>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 text-center"
      >
        {navLinks.map((link) => (
          <motion.li key={link.href} variants={itemVariants}>
            <Link href={link.href} className="text-white text-3xl font-medium">
              {link.name}
            </Link>
          </motion.li>
        ))}

        {/* Connect Button for Mobile */}
        <motion.li variants={itemVariants} className="mt-8">
          <Link
            href="/contact"
            className="bg-orange-500 text-white text-lg font-semibold px-6 py-4 rounded-full 
                       hover:bg-orange-600 transition-all flex items-center"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="inline ml-2 h-5 w-5" />
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
