import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, FileText, Lock, ShieldCheck } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

interface HeroProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 px-4 sm:px-6 lg:px-12 pattern-grid-blush border-b border-[#09090b]/15 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#09090b]/15 shadow-xs mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#09090b]">
            {PORTFOLIO_INFO.availabilityStatus}
          </span>
          <span className="text-xs text-[#09090b]/25">|</span>
          <span className="text-xs font-mono text-[#09090b]/70 font-medium">
            Akure, Nigeria & Worldwide
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#09090b] tracking-tight leading-[1.08] mb-6 font-heading"
        >
          Legal administration, <br />
          <span className="text-[#6b1728] font-normal">
            calendar management & practice support.
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="text-base sm:text-xl text-[#09090b]/80 leading-relaxed max-w-3xl mx-auto mb-10 font-light"
        >
          I partner with attorneys, advocates, and commercial law teams to coordinate court hearing calendars, prepare court-ready agreements & MOUs, organize confidential matter files, and streamline client intake.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-md group"
          >
            <span>Schedule Retainer Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-160" />
          </a>

          <a
            href="#about"
            className="px-8 py-4 rounded-full bg-white text-[#09090b] border border-[#09090b]/15 text-xs font-bold uppercase tracking-wider hover:bg-white/80 active:scale-[0.97] transition-all duration-160 shadow-xs"
          >
            <span>Meet Chibuchi Ovunda</span>
          </a>
        </motion.div>

        {/* Quick Assurance Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex flex-wrap items-center justify-center gap-6 text-xs text-[#09090b]/75 font-mono pt-6 border-t border-[#09090b]/15 w-full max-w-2xl"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#6b1728]" />
            <span>100% NDA Protected</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#6b1728]" />
            <span>Under 2h Response SLA</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#6b1728]" />
            <span>500+ Documents Prepared</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
};
