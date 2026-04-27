"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";
import AboutDropdown from "./AboutDropdown";
import MobileNavMenu from "./MobileNavMenu";
import { ArrowUpRight, Menu, X } from "lucide-react";
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

  // Close mobile menu on route change (unchanged)
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [pathname, isMobileMenuOpen]);

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
          {/* <Link
            href="/about"
            className={pathname === "/about" ? "text-orange-500" : ""}
          >
            About
          </Link> */}
          <div className="relative">
            <button
              data-dropdown-trigger="true"
              onClick={() =>
                setActiveDropdown((prev) => (prev === "about" ? null : "about"))
              }
              className="cursor-pointer"
            >
              About Me
            </button>
          </div>
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
    </>
  );
}
