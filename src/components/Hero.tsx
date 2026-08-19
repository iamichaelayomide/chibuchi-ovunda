import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  FileCheck2,
  Lock,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

interface HeroProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectServiceForConsult }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-12 bg-[#fbfbfa] border-b border-[#e4e4e7] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e4e4e7] shadow-sm w-fit mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="text-xs font-semibold text-[#09090b]">
                {PORTFOLIO_INFO.availabilityStatus}
              </span>
              <span className="text-xs text-[#71717a]">·</span>
              <span className="text-xs font-medium text-[#52525b]">
                Akure & Worldwide
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#09090b] tracking-tight leading-[1.08] mb-6"
            >
              Strategic legal support, <br />
              <span className="font-serif italic font-normal text-[#6b1728]">
                flawlessly executed.
              </span>
            </motion.h1>

            {/* Subtitle / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="text-base sm:text-lg text-[#52525b] leading-relaxed max-w-2xl mb-8 font-light"
            >
              I partner with attorneys, barristers, and legal teams to organize matter files, draft court-ready documentation, streamline client intake, and protect billable hours.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-sm group"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-160" />
              </a>

              <a
                href="#work"
                className="px-6 py-3.5 rounded-full bg-white border border-[#e4e4e7] text-[#09090b] text-xs font-bold uppercase tracking-wider hover:bg-[#f4f4f5] hover:border-[#d4d4d8] active:scale-[0.97] transition-all duration-160 shadow-sm"
              >
                <span>Inspect Work Samples</span>
              </a>
            </motion.div>

            {/* Three Pillar Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#e4e4e7]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#e4e4e7] flex items-center justify-center text-[#6b1728] shrink-0 shadow-xs">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#09090b]">Strict NDA</p>
                  <p className="text-[11px] text-[#71717a]">Confidentiality First</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#e4e4e7] flex items-center justify-center text-[#6b1728] shrink-0 shadow-xs">
                  <FileCheck2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#09090b]">500+ Documents</p>
                  <p className="text-[11px] text-[#71717a]">Court-Ready Precision</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#e4e4e7] flex items-center justify-center text-[#6b1728] shrink-0 shadow-xs">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#09090b]">&lt; 2h SLA</p>
                  <p className="text-[11px] text-[#71717a]">Rapid Matter Updates</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Architectural Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Solid Frame */}
              <div className="p-3 bg-white border border-[#e4e4e7] rounded-3xl shadow-lg">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#18181b]">
                  <img
                    src="/images/hero_portrait.webp"
                    alt="Chibuchi Ovunda - Virtual Legal Assistant"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />

                  {/* Corner Redacted Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#09090b]/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 border border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f4c8d1]" />
                    <span>Verified Legal VA</span>
                  </div>

                  {/* Bottom Monogram Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/50 to-transparent text-white">
                    <p className="text-xs font-bold font-serif tracking-wide text-white">
                      Chibuchi Ovunda
                    </p>
                    <p className="text-[10px] text-white/70">
                      Legal Administration & Practice Systems
                    </p>
                  </div>
                </div>
              </div>

              {/* Float Experience Chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#09090b] text-white p-3.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#6b1728] text-white flex items-center justify-center font-bold text-sm font-serif">
                  5+
                </div>
                <div>
                  <p className="text-xs font-bold">Years Experience</p>
                  <p className="text-[10px] text-white/60">Practices & Advocates</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
