import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Calendar, FileText, ArrowRight, Lock } from "lucide-react";
import { PORTFOLIO_INFO } from "../data/portfolioData";

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Solid Architectural Card */}
              <div className="p-3 bg-[#faf9f5] border border-[#e4e4e7] rounded-3xl shadow-sm">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#18181b] border border-[#e4e4e7]">
                  <img
                    src="/images/hero_portrait.webp"
                    alt="Chibuchi Ovunda, Virtual Legal Assistant"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#09090b]/85 backdrop-blur-sm text-white text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 border border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f4c8d1]" />
                    <span>Verified Legal Assistant</span>
                  </div>

                  {/* Bottom Solid Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-[#09090b]/90 backdrop-blur-sm border-t border-[#27272a] text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold tracking-wide text-white">
                          {PORTFOLIO_INFO.name}
                        </p>
                        <p className="text-[10px] text-[#a1a1aa]">
                          {PORTFOLIO_INFO.subtitle}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-[#f4c8d1] uppercase tracking-wider">
                        {PORTFOLIO_INFO.experienceYears}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-xs text-[#52525b] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#6b1728]" />
                <span>Akure, Nigeria · Serving Worldwide Practices</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Practice Philosophy */}
          <div className="lg:col-span-7">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
              ABOUT CHIBUCHI OVUNDA
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09090b] tracking-tight leading-tight mb-6 font-heading">
              A trusted practice partner for attorneys, advocates & law chambers.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#52525b] leading-relaxed font-light mb-8">
              <p>
                With over five years of dedicated experience in virtual legal support, I specialize in bringing order, speed, and precision to high-volume legal practices.
              </p>
              <p>
                My background spans coordinating complex hearing calendars across timezones, drafting and formatting court-compliant commercial agreements and MOUs, structuring cloud matter repositories in Google Workspace and Clio, and managing confidential client intake databases.
              </p>
              <p className="border-l-2 border-[#6b1728] pl-4 text-[#09090b] font-normal italic">
                “Legal practice demands discretion, punctuality, and unwavering attention to detail. My role is to eliminate administrative complexity so counsel can focus entirely on high-stakes advocacy and client advisory.”
              </p>
            </div>

            {/* Core Capability Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#e4e4e7] mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#faf9f5] border border-[#e4e4e7] flex items-center justify-center text-[#6b1728] shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#09090b]">
                    Calendar & Hearing Coordination
                  </h3>
                  <p className="text-xs text-[#71717a] font-light">
                    Statutory dockets, filing dates, and client meetings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#faf9f5] border border-[#e4e4e7] flex items-center justify-center text-[#6b1728] shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#09090b]">
                    Confidentiality & Privilege
                  </h3>
                  <p className="text-xs text-[#71717a] font-light">
                    100% NDA protected with role-based access.
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 shadow-sm group"
              >
                <span>Discuss Your Matter Needs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
