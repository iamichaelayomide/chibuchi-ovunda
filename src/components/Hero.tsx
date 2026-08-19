import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#f4c8d1] via-[#f7d3db] to-[#fffaf7] pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-[#0b0b0b]/5"
    >
      {/* Subtle Ambient Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#c84f70]/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#0b0b0b]/10 text-xs font-semibold text-[#0b0b0b] shadow-xs w-fit mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-medium text-[11px] tracking-wide uppercase">
              {PORTFOLIO_INFO.availabilityStatus}
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-[#0b0b0b] mb-4 font-normal">
              Chibuchi <br />
              <span className="font-serif italic font-normal text-[#a83254]">Ovunda</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#0b0b0b]/90 mb-5 font-serif">
              Virtual Legal Assistant & Operations Partner
            </h2>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-[#0b0b0b]/80 max-w-xl leading-relaxed mb-8 font-light"
          >
            {PORTFOLIO_INFO.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10"
          >
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-between gap-4 px-7 py-4 rounded-xl bg-[#0b0b0b] text-white text-sm font-bold tracking-wider uppercase hover:bg-[#a83254] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group min-w-[220px]"
            >
              <span>Let’s Work Together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-xl text-sm font-bold text-[#0b0b0b] border-b-2 border-[#0b0b0b] hover:text-[#a83254] hover:border-[#a83254] transition-colors group"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Key Value Micro-Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#0b0b0b]/10 text-xs font-semibold text-[#0b0b0b]/75"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#a83254]" />
              <span>100% Strict NDA Compliance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#a83254]" />
              <span>Rapid & Reliable SLAs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#a83254]" />
              <span>Court-Ready Quality</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Dynamic Portrait Frame & Floating Accent Cards */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[420px] sm:max-w-[460px]"
          >
            {/* Background Geometric Accent */}
            <div className="absolute -bottom-4 -left-4 w-3/4 h-24 bg-[#0b0b0b] rounded-2xl -z-10 transform -rotate-1 shadow-xl"></div>
            <div className="absolute -top-3 -right-3 w-32 h-32 bg-[#a83254]/20 rounded-full blur-2xl -z-10"></div>

            {/* Main Portrait Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#0e1e32] aspect-[3/4] group">
              <img
                src="/images/hero_portrait.webp"
                alt="Chibuchi Ovunda — Virtual Legal Assistant"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

              {/* Bottom Tag on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0b0b0b]/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-serif font-semibold">Chibuchi Ovunda</p>
                  <p className="text-[10px] text-white/70">Legal Administration Specialist</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#f4c8d1] text-[#0b0b0b] font-bold tracking-wider uppercase">
                  Verified
                </span>
              </div>
            </div>

            {/* Floating Badge Top Left: Confidentiality Seal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#e6cbd1] flex items-center gap-3 animate-float"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f4c8d1] text-[#a83254] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#a83254] tracking-wider">Security</p>
                <p className="text-xs font-bold text-[#0b0b0b]">100% Confidential</p>
              </div>
            </motion.div>

            {/* Floating Badge Bottom Right: Experience Pill */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#0b0b0b] text-white p-3.5 rounded-2xl shadow-2xl border border-white/15 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#a83254] text-white flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-[#f4c8d1] tracking-wider">Practice Ops</p>
                <p className="text-xs font-bold text-white">Court-Ready Standards</p>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
