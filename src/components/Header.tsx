import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work Showcase", href: "#work" },
    { label: "Tech Stack", href: "#tools" },
    { label: "Trust Standards", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[#fbfbfa]/95 backdrop-blur-md border-b border-[#e4e4e7] py-3.5 shadow-sm"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#09090b] text-white flex items-center justify-center  font-bold text-sm tracking-wider shadow-sm group-hover:bg-[#6b1728] transition-colors duration-160">
              CO
            </div>
            <div className="flex flex-col">
              <span className=" font-bold text-base text-[#09090b] tracking-tight group-hover:text-[#6b1728] transition-colors duration-160">
                {PORTFOLIO_INFO.name}
              </span>
              <span className="text-[10px] font-semibold text-[#52525b] uppercase tracking-widest">
                Virtual Legal Assistant
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white border border-[#e4e4e7] px-3 py-1.5 rounded-full shadow-sm">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#52525b] hover:text-[#09090b] hover:bg-[#f4f4f5] active:scale-[0.96] transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#09090b] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-sm group"
            >
              <span>Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-160" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-[#e4e4e7] text-[#09090b] active:scale-[0.94] transition-transform duration-150"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Top Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6b1728] origin-left"
        />
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#09090b]/60 backdrop-blur-sm flex flex-col justify-end">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="bg-[#fbfbfa] rounded-t-3xl border-t border-[#e4e4e7] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e4e4e7]">
              <span className=" font-bold text-lg text-[#09090b]">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg bg-white border border-[#e4e4e7] text-[#09090b]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 mb-6">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-[#09090b] hover:bg-[#f4f4f5] active:scale-[0.98] transition-all duration-150 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#71717a]" />
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-md"
            >
              <span>Schedule Direct Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
};
