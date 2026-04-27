"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";
import AboutDropdown from "./AboutDropdown";
import MobileNavMenu from "./MobileNavMenu";
import { ArrowLeft, Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Services", type: "dropdown", id: "services" },
  { name: "Resume", href: "/resume" },
];

/**
 * Animation Variants for the text roll
 */
const textVariants = {
  initial: { y: 0 },
  hovered: { y: "-100%" },
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<"services" | "about" | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
        setActiveDropdown(null);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Click outside logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('[data-dropdown-trigger="true"]')
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className={`hidden md:fixed top-6 left-0 right-0 mx-auto z-50 
            w-[90%] max-w-6xl rounded-full 
            bg-black/50 dark:bg-white/10 backdrop-blur-md border border-white/10 
            px-4 py-3 md:flex items-center justify-between shadow-lg 
            transition-transform duration-300 
            ${visible ? "translate-y-0" : "-translate-y-[150%]"}`}
      >
        <Link href="/" className="text-lg font-bold text-white px-4">
          CarbonForm
        </Link>

        {/* --- TEXT ROLL NAVIGATION --- */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={item.name}
                initial="initial"
                whileHover="hovered"
                className="relative overflow-hidden cursor-pointer h-5" // h-5 matches text height to hide overflow
              >
                {item.type === "dropdown" ? (
                  <button
                    data-dropdown-trigger="true"
                    onClick={() => setActiveDropdown((p) => (p === "services" ? null : "services"))}
                    className="flex flex-col text-left"
                  >
                    {/* Layer 1: Normal Text */}
                    <motion.span variants={textVariants} transition={{ duration: 0.3, ease: "easeInOut" }} className="text-white">
                      {item.name}
                    </motion.span>
                    {/* Layer 2: Orange Text (Coming from bottom) */}
                    <motion.span variants={textVariants} transition={{ duration: 0.3, ease: "easeInOut" }} className="text-orange-500 absolute top-full">
                      {item.name}
                    </motion.span>
                  </button>
                ) : (
                  <Link href={item.href!} className="flex flex-col">
                    {/* Layer 1 */}
                    <motion.span 
                      variants={textVariants} 
                      transition={{ duration: 0.3, ease: "easeInOut" }} 
                      className={isActive ? "text-orange-500" : "text-white"}
                    >
                      {item.name}
                    </motion.span>
                    {/* Layer 2 */}
                    <motion.span 
                      variants={textVariants} 
                      transition={{ duration: 0.3, ease: "easeInOut" }} 
                      className="text-orange-500 absolute top-full"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {activeDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full flex justify-center"
            >
              {activeDropdown === "services" ? <NavbarDropdown /> : <AboutDropdown />}
            </div>
          )}
        </AnimatePresence>

        <div className="hidden lg:flex items-center gap-4">
          <AnimatedThemeToggler iconClassName="text-white" />
          <Link
            href="/contact"
            className="bg-orange-500 text-white text-md font-semibold px-5 py-3 rounded-full hover:bg-orange-600 transition-all"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-[130%]"}`}>
        <div className="mx-4 mt-4 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold px-4 py-2 rounded-full dark:bg-slate-900/90 text-white backdrop-blur-sm">
            CarbonForm
          </Link>
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center">
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && <MobileNavMenu onNavigate={() => setIsMobileMenuOpen(false)} onClose={() => setIsMobileMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}