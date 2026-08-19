import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Calendar, FileText, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7] pattern-dots-light overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Tag */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3"
        >
          MEET CHIBUCHI OVUNDA
        </motion.p>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09090b] tracking-tight leading-tight mb-10 font-heading"
        >
          A dedicated practice partner for attorneys, advocates & law chambers.
        </motion.h2>

        {/* Scroll-Driven Reveal: Centered Portrait Plate */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-xs sm:max-w-sm mx-auto mb-10"
        >
          <div className="p-3 bg-[#f5cad5] border border-[#09090b]/15 rounded-3xl shadow-xl">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#09090b]">
              <img
                src="/images/hero_portrait.webp"
                alt="Chibuchi Ovunda, Virtual Legal Assistant"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />

              {/* Top Status Bar */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[#09090b]/85 backdrop-blur-sm text-white text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#f4c8d1]" />
                  <span>Verified VA</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#09090b] text-[10px] font-mono font-bold">
                  {PORTFOLIO_INFO.experienceYears}
                </span>
              </div>

              {/* Bottom Identification Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-[#09090b]/90 backdrop-blur-sm border-t border-[#27272a] text-white text-center">
                <p className="text-sm font-bold font-heading">{PORTFOLIO_INFO.name}</p>
                <p className="text-[10px] text-[#a1a1aa] font-mono mt-0.5">Akure, Nigeria · Available Worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Staggered Bio Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-4 text-sm sm:text-base text-[#52525b] leading-relaxed font-light max-w-2xl mx-auto mb-10"
        >
          <p>
            With over five years of dedicated experience in virtual legal administration, I help attorneys, advocates, and commercial chambers eliminate administrative backlog and run responsive, court-ready practices.
          </p>
          <p>
            My specialized workflows span hearing calendar docketing across timezones, custom Gmail labeling, drafting and formatting commercial agreements & MOUs, executive minute taking, and building standardized 8-folder cloud repositories in Google Drive and Clio.
          </p>
          <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e4e4e7] text-xs sm:text-sm text-[#09090b] font-normal italic max-w-xl mx-auto">
            “Legal practice demands discretion, punctuality, and zero margin for error. My role is to shoulder operational complexity so counsel can focus entirely on client advocacy.”
          </div>
        </motion.div>

        {/* Centered Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-center"
        >
          <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e4e4e7] flex flex-col items-center justify-center">
            <Calendar className="w-5 h-5 text-[#6b1728] mb-1.5" />
            <h4 className="text-xs font-bold text-[#09090b] font-heading">Calendar & Hearing Docketing</h4>
            <p className="text-[11px] text-[#71717a]">Court dates, statutory alerts, client meetings.</p>
          </div>

          <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e4e4e7] flex flex-col items-center justify-center">
            <Lock className="w-5 h-5 text-[#6b1728] mb-1.5" />
            <h4 className="text-xs font-bold text-[#09090b] font-heading">Strict Non-Disclosure</h4>
            <p className="text-[11px] text-[#71717a]">100% NDA protected with role permissions.</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 shadow-md group"
          >
            <span>Let’s Work Together</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
