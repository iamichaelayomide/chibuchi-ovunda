import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Emil Design Eng: Spring scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "work", "tools", "about", "contact"];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Tools", href: "#tools", id: "tools" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#c84f70] via-[#a83254] to-[#0b0b0b] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#f4c8d1]/90 backdrop-blur-md shadow-xs border-b border-[#0b0b0b]/10 py-3"
            : "bg-[#f4c8d1] border-b border-[#0b0b0b]/8 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-none active:scale-[0.98] transition-transform"
            aria-label="Chibuchi Ovunda home"
          >
            <div className="w-10 h-10 rounded-full bg-[#0b0b0b] text-[#f4c8d1] flex items-center justify-center font-serif text-base font-bold tracking-tighter group-hover:scale-105 transition-transform duration-200 shadow-inner">
              CO
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-base tracking-tight text-[#0b0b0b] font-serif">
                {PORTFOLIO_INFO.name}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-[11px] text-[#0b0b0b]/70 font-medium tracking-wide">
                  Virtual Legal Assistant
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0b0b0b]/5 px-3 py-1.5 rounded-full border border-[#0b0b0b]/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 active:scale-[0.96] ${
                    isActive
                      ? "text-[#0b0b0b]"
                      : "text-[#0b0b0b]/70 hover:text-[#0b0b0b]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/70 rounded-full -z-10 shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0b0b0b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#a83254] active:scale-[0.97] transition-all duration-160 shadow-xs hover:shadow-md group"
            >
              <span>Let’s Work Together</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-160" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-[#0b0b0b] text-white hover:bg-[#a83254] active:scale-[0.95] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#c84f70]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="lg:hidden bg-[#0b0b0b] text-white border-t border-white/10 px-6 py-6 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-2.5">
                <div className="pb-3 mb-2 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Accepting Engagements</span>
                  </div>
                  <span className="text-[10px] text-white/50 tracking-wider uppercase font-semibold">
                    Akure · Remote
                  </span>
                </div>

                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, ease: [0.23, 1, 0.32, 1] }}
                    className={`py-2 text-base font-serif font-medium tracking-wide flex items-center justify-between border-b border-white/5 active:scale-[0.98] transition-transform ${
                      activeSection === link.id ? "text-[#f4c8d1] font-bold" : "text-white/85 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </motion.a>
                ))}

                <div className="pt-4">
                  <button
                    onClick={() => {
                      closeMenu();
                      onOpenConsultation();
                    }}
                    className="w-full py-3.5 rounded-xl bg-[#f4c8d1] text-[#0b0b0b] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-[0.97] hover:bg-white transition-all duration-160"
                  >
                    <span>Request Legal Support</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
