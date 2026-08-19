import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

interface HeroProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 px-4 sm:px-6 lg:px-12 bg-[#faf9f5] border-b border-[#e4e4e7] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#e4e4e7] shadow-xs mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#09090b]">
            {PORTFOLIO_INFO.availabilityStatus}
          </span>
          <span className="text-xs text-[#d4d4d8]">|</span>
          <span className="text-xs font-mono text-[#71717a]">
            Akure, Nigeria & Worldwide
          </span>
        </motion.div>

        {/* Main Headline in Work Sans */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#09090b] tracking-tight leading-[1.08] mb-6 font-heading"
        >
          Strategic legal operations, <br />
          <span className="text-[#6b1728] font-normal">
            calendar management & practice support.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="text-base sm:text-xl text-[#52525b] leading-relaxed max-w-3xl mx-auto mb-10 font-light"
        >
          I partner with attorneys, advocates, and legal teams to coordinate hearing calendars, structure matter files, draft court-compliant agreements, and safeguard billable hours.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-7 py-4 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-sm group"
          >
            <span>Request Retainer Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-160" />
          </a>

          <a
            href="#about"
            className="px-7 py-4 rounded-full bg-white border border-[#e4e4e7] text-[#09090b] text-xs font-bold uppercase tracking-wider hover:bg-[#f4f4f5] hover:border-[#d4d4d8] active:scale-[0.97] transition-all duration-160 shadow-xs"
          >
            <span>About Chibuchi Ovunda</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
