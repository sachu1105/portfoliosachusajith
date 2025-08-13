"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Click outside dropdown to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full 
      bg-black/60 backdrop-blur-md border border-white/20 px-2 py-2 flex items-center justify-between shadow-lg
      transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-[150%]"}`}
    >
      <div className="flex gap-6 text-sm font-medium text-white relative ml-6">
        <Link href="/" className={pathname === "/" ? "text-orange-500" : ""}>
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "text-orange-500" : ""}
        >
          My story
        </Link>

        <button
          ref={buttonRef}
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          Services
        </button>

        <Link
          href="/projects"
          className={pathname === "/projects" ? "text-orange-500" : ""}
        >
          Projects
        </Link>
      </div>

      <AnimatePresence>
        {dropdownOpen && (
          <div ref={dropdownRef}>
            <NavbarDropdown />
          </div>
        )}
      </AnimatePresence>


      {/* Connect Button */}

      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="bg-orange-500 text-white text-md font-semibold px-5 py-3 rounded-full 
                      hover:bg-orange-600 transition-all"
        >
          <span>Let&apos;s Connect</span>
          <ArrowUpRight className="inline ml-2" />
        </Link>
      </div>
    </nav>
  );
}
