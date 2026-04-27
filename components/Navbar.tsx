"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";
import AboutDropdown from "./AboutDropdown";
import MobileNavMenu from "./MobileNavMenu";
import { ArrowLeft, Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<"services" | "about" | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Hide/show navbar on scroll (unchanged)
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

  // Close dropdown on click outside (unchanged)
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

  // Close mobile menu only when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close services dropdown when navigating (e.g. "View All Services")
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  // Disable body scroll when mobile menu is open (unchanged)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <nav
        ref={navRef}
        className={`hidden md:fixed top-3 md:top-6 left-0 right-0 mx-auto z-50 
            w-[90%] max-w-6xl 
            rounded-full 
            bg-black/60 backdrop-blur-md border border-white/20 
            px-2 py-2 md:flex items-center justify-between shadow-lg 
            transition-transform duration-300 
            ${visible ? "translate-y-0" : "-translate-y-[150%]"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-white px-4 flex-shrink-0"
        >
          CarbonForm
        </Link>

        {/* Desktop Navigation Links (centered absolutely) */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-white absolute left-1/2 -translate-x-1/2">
          <Link href="/" className={pathname === "/" ? "text-orange-500" : ""}>
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-orange-500" : ""}
          >
            About Me
          </Link>
          {/* <div className="relative">
            <button
              data-dropdown-trigger="true"
              onClick={() =>
                setActiveDropdown((prev) => (prev === "about" ? null : "about"))
              }
              className="cursor-pointer"
            >
              About Me
            </button>
          </div> */}
          <div className="relative">
            <button
              data-dropdown-trigger="true"
              onClick={() =>
                setActiveDropdown((prev) =>
                  prev === "services" ? null : "services"
                )
              }
              className="cursor-pointer"
            >
              Services
            </button>
            
          </div>
          <Link
            href="/resume"
            className={pathname === "/resume" ? "text-orange-500" : ""}
          >
            Resume
          </Link>
        </div>

        {/* Dropdown */}
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

        {/* Desktop Connect Button */}
        <div className="hidden lg:flex items-center gap-4">
          <AnimatedThemeToggler />

          
          <Link
            href="/contact"
            className="bg-orange-500 text-white text-md font-semibold px-5 py-3 rounded-full 
                       hover:bg-orange-600 transition-all flex items-center"
          >
            <span>Contact</span>
            
          </Link>

        
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-[130%]"
        }`}
      >
        <div className="mx-4 mt-4">
          <div className="flex items-center justify-between">
            {pathname !== "/" ? (
              <Link
                href="/"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 backdrop-blur-sm"
                aria-label="Go to home"
              >
                <ArrowLeft size={20} />
              </Link>
            ) : (
              <div className="w-10 h-10" />
            )}

            <Link
              href="/"
              className="text-sm font-semibold px-3 py-1.5 rounded-full dark:bg-slate-900/90   dark:border-slate-700 text-slate-900 dark:text-white backdrop-blur-sm"
            >
              CarbonForm
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNavMenu
            onNavigate={() => setIsMobileMenuOpen(false)}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
