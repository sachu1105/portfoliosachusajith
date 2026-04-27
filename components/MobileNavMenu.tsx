"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Story", href: "/about" },
  { name: "Services", href: "/myservices" },
  { name: "Resume", href: "/resume.pdf", external: true },
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

type MobileNavMenuProps = {
  onNavigate?: () => void;
  onClose?: () => void;
};

export default function MobileNavMenu({ onNavigate, onClose }: MobileNavMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white/95 dark:bg-black/95 z-[70] lg:hidden flex flex-col items-center justify-center"
    >
      {/* Top controls */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        aria-label="Close menu"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="absolute top-4 left-4">
        <AnimatedThemeToggler iconClassName="text-neutral-900 dark:text-white" />
      </div>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 text-center"
      >
        {navLinks.map((link) => (
          <motion.li key={link.href} variants={itemVariants}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onNavigate}
                className="text-neutral-900 dark:text-white text-3xl font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                href={link.href}
                onClick={onNavigate}
                className="text-neutral-900 dark:text-white text-3xl font-medium"
              >
                {link.name}
              </Link>
            )}
          </motion.li>
        ))}

        {/* Connect Button for Mobile */}
        <motion.li variants={itemVariants} className="mt-8">
          <Link
            href="/contact"
            onClick={onNavigate}
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
