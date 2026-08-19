import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, HeartHandshake } from "lucide-react";
import { TRUST_PILLARS } from "../data/portfolioData";

export const TrustPillars: React.FC = () => {
  const iconList = [ShieldCheck, Target, Zap, HeartHandshake];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b] text-white border-b border-[#27272a] pattern-grid-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Center-Aligned Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#f5cad5] mb-3">
            04 / PRACTICE COMMITMENT
          </p>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5 font-heading">
            Four pillars of <br />
            <span className="text-[#f5cad5] font-normal">operational integrity.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
            Legal assistance demands strict discretion, statutory adherence, and zero margin for error. Here is the operational philosophy behind every matter.
          </p>
        </div>

        {/* Architectural 4-Column Broadsheet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#27272a] border-y border-[#27272a]">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = iconList[idx] || ShieldCheck;

            return (
              <div
                key={pillar.number}
                className={`py-8 sm:py-10 ${
                  idx === 0
                    ? "lg:pr-8"
                    : idx === 3
                    ? "sm:pl-8 lg:pl-8"
                    : "sm:pl-8 lg:px-8"
                } flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-bold text-[#f5cad5] font-heading">
                      {pillar.number}
                    </span>
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-[#f5cad5] transition-colors duration-150" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#f5cad5] transition-colors duration-150 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-8 font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#27272a] text-[10px] font-mono font-semibold uppercase tracking-wider text-white/40 group-hover:text-[#f5cad5] transition-colors duration-150">
                  {pillar.highlight}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
