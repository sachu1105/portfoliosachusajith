"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";
import MobileNavMenu from "./MobileNavMenu";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
        setDropdownOpen(false); // Close dropdown when scrolling down
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Disable body scroll when mobile menu is open
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
      <nav
        ref={navRef}
        className={`fixed top-3 md:top-6 left-0 right-0 mx-auto z-50 
            w-[92%] md:w-[90%] max-w-6xl 
            rounded-2xl md:rounded-full 
            bg-black/60 backdrop-blur-md border border-white/20 
            px-4 py-2 flex items-center justify-between shadow-lg 
            transition-transform duration-300 
            ${visible ? "translate-y-0" : "-translate-y-[150%]"}`}
      >
        {/* Logo/Brand Name */}
        <Link href="/" className="text-lg font-bold text-white ml-2 md:ml-4">
          CarbonForm
        </Link>

        {/* Desktop Navigation Links (Hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-white absolute left-1/2 -translate-x-1/2">
          <Link href="/" className={pathname === "/" ? "text-orange-500" : ""}>
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-orange-500" : ""}
          >
            My story
          </Link>
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="cursor-pointer"
            >
              Services
            </button>
          </div>
          <Link
            href="/projects"
            className={pathname === "/projects" ? "text-orange-500" : ""}
          >
            Projects
          </Link>
        </div>

        {/* Dropdown positioned relative to the entire navbar */}
        <AnimatePresence>
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full flex justify-center"
            >
              <NavbarDropdown />
            </div>
          )}
        </AnimatePresence>

        {/* Desktop Connect Button (Hidden on small screens) */}
        <div className="hidden lg:block">
          <Link
            href="#"
            className="bg-orange-500 text-white text-md font-semibold px-5 py-3 rounded-full 
                       hover:bg-orange-600 transition-all flex items-center"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="inline ml-1 h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button (Visible on small screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>{isMobileMenuOpen && <MobileNavMenu />}</AnimatePresence>
    </>
  );
}
