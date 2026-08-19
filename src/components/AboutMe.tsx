import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Calendar, FileText, ArrowRight, Lock } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7] pattern-dots-light">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Tag */}
        <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
          ABOUT CHIBUCHI OVUNDA
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09090b] tracking-tight leading-tight mb-8 font-heading">
          A dedicated practice partner for attorneys, advocates & law chambers.
        </h2>

        {/* Centered Portrait Frame */}
        <div className="max-w-xs mx-auto mb-10">
          <div className="p-3 bg-[#f5cad5] border border-[#09090b]/15 rounded-3xl shadow-md">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#09090b]">
              <img
                src="/images/hero_portrait.webp"
                alt="Chibuchi Ovunda, Virtual Legal Assistant"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />

              {/* Verified Pill */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-[#09090b]/85 backdrop-blur-sm text-white text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#f4c8d1]" />
                  <span>Verified Legal VA</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/90 text-[#09090b] text-[10px] font-mono font-bold">
                  {PORTFOLIO_INFO.experienceYears}
                </span>
              </div>

              {/* Bottom Name Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 bg-[#09090b]/90 backdrop-blur-sm border-t border-[#27272a] text-white text-center">
                <p className="text-xs font-bold font-heading">{PORTFOLIO_INFO.name}</p>
                <p className="text-[10px] text-[#a1a1aa]">Akure, Nigeria · Worldwide Remote</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Body */}
        <div className="space-y-4 text-sm sm:text-base text-[#52525b] leading-relaxed font-light max-w-2xl mx-auto mb-10">
          <p>
            With over five years of specialized experience in virtual legal support, I help attorneys and legal chambers eliminate administrative backlog and run organized, responsive practices.
          </p>
          <p>
            My work spans hearing calendar docketing across timezones, drafting and formatting court-compliant commercial agreements & MOUs, organizing cloud matter repositories in Google Workspace and Clio, and managing client intake databases.
          </p>
          <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#e4e4e7] text-xs sm:text-sm text-[#09090b] font-normal italic">
            “Legal practice demands discretion, punctuality, and zero margin for error. My role is to manage administrative complexity so counsel can focus entirely on client advocacy.”
          </div>
        </div>

        {/* 2 Centered Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
          <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e4e4e7] flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#6b1728] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#09090b]">Calendar & Hearing Docketing</h4>
              <p className="text-[11px] text-[#71717a]">Court dates, statutory alerts, client meetings.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e4e4e7] flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#6b1728] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#09090b]">Strict Non-Disclosure</h4>
              <p className="text-[11px] text-[#71717a]">100% NDA protected with role permissions.</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 shadow-sm group"
          >
            <span>Let’s Work Together</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
        </div>

      </div>
    </section>
  );
};
