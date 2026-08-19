import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "work", "about", "tools", "faq", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Work", href: "#work", id: "work" },
    { label: "About", href: "#about", id: "about" },
    { label: "Tools", href: "#tools", id: "tools" },
    { label: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <header
      className={"fixed top-0 inset-x-0 z-50 transition-all duration-200 " + (
        scrolled
          ? "bg-[#f5cad5]/95 backdrop-blur-md border-b border-[#09090b]/15 shadow-xs py-3.5"
          : "bg-[#f5cad5] border-b border-[#09090b]/10 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Monogram & Title (From Canva Style) */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#09090b] text-[#f5cad5] flex items-center justify-center font-bold text-sm tracking-wider shadow-xs group-hover:scale-105 transition-transform duration-160 font-heading">
            CO
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base text-[#09090b] tracking-tight font-heading leading-tight">
              {PORTFOLIO_INFO.name}
            </span>
            <span className="text-[11px] text-[#09090b]/70 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              {PORTFOLIO_INFO.title}
            </span>
          </div>
        </a>

        {/* Center-Aligned Desktop Nav Pill */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#09090b]/5 border border-[#09090b]/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={"px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 " + (
                  isActive
                    ? "bg-white text-[#09090b] shadow-xs"
                    : "text-[#09090b]/75 hover:text-[#09090b] hover:bg-white/40"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button ("LET'S WORK TOGETHER ->") */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-xs group"
          >
            <span>Let’s Work Together</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-160" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-full bg-white/80 border border-[#09090b]/15 text-[#09090b] active:scale-[0.95]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#f5cad5] border-b border-[#09090b]/15 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl text-sm font-bold text-[#09090b] hover:bg-white/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <span>Let’s Work Together</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
