"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8 flex justify-center pointer-events-none transition-all duration-300">
      <div className={cn(
        "pointer-events-auto w-full max-w-5xl flex items-center justify-between px-6 md:px-8 py-4 md:py-5 rounded-[24px] border transition-all duration-500 relative",
        isScrolled 
          ? "bg-[#111111]/90 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
          : "bg-[#111111]/50 backdrop-blur-sm border-white/5"
      )}>
        
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleLinkClick("#home"); }}
          className="text-xl md:text-2xl font-bold tracking-tight text-foreground hover:text-accent transition-colors flex items-center gap-2"
        >
          {/* A small abstract logo icon like React Bits could go here if wanted, for now just the text */}
          JG.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className="text-sm font-medium text-muted hover:text-white transition-colors cursor-pointer"
              whileHover={{ 
                scale: 1.15, 
                textShadow: "0px 0px 12px rgba(59,130,246,0.8)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[120%] left-0 right-0 bg-[#111111]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[24px] lg:hidden overflow-hidden"
            >
              <div className="flex flex-col p-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="text-base font-medium text-muted hover:text-white hover:bg-white/5 p-4 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
