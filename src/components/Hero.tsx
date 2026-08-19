import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, FileCheck2, Zap } from "lucide-react";
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

        {/* High-Converting Outcome-Driven Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#09090b] tracking-tight leading-[1.08] mb-6 font-heading"
        >
          Reclaim 15+ billable hours weekly <br />
          <span className="text-[#6b1728] font-normal">
            without administrative chaos.
          </span>
        </motion.h1>

        {/* High-Specificity Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="text-base sm:text-xl text-[#52525b] leading-relaxed max-w-3xl mx-auto mb-10 font-light"
        >
          Dedicated virtual legal operations for attorneys, advocates, and commercial law chambers. I manage court hearing calendars, draft court-compliant agreements and MOUs, organize confidential matter files, and streamline client intake.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-7 py-4 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-sm group"
          >
            <span>Schedule Discovery Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-160" />
          </a>

          <a
            href="#services"
            className="px-7 py-4 rounded-full bg-white border border-[#e4e4e7] text-[#09090b] text-xs font-bold uppercase tracking-wider hover:bg-[#f4f4f5] hover:border-[#d4d4d8] active:scale-[0.97] transition-all duration-160 shadow-xs"
          >
            <span>Explore Practice Deliverables</span>
          </a>
        </motion.div>

        {/* Risk Reversal & Assurance Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex flex-wrap items-center justify-center gap-6 text-xs text-[#52525b] font-mono border-t border-[#e4e4e7] pt-8 w-full max-w-2xl"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% NDA Protected</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero Software Downtime</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>&lt; 2h Priority Response</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>500+ Documents Prepared</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
};
