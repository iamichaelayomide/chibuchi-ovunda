import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, HeartHandshake } from "lucide-react";
import { TRUST_PILLARS } from "../data/portfolioData";

export const TrustPillars: React.FC = () => {
  const iconList = [ShieldCheck, Target, Zap, HeartHandshake];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#09090b] text-white border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs font-bold uppercase tracking-widest text-[#f4c8d1] mb-3"
          >
            Trust & Security Architecture
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-5"
          >
            Confidential. Reliable. <br />
            <span className="font-serif italic font-normal text-[#f4c8d1]">Meticulous.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg text-white/70 leading-relaxed font-light"
          >
            Legal support demands strict discretion, statutory adherence, and zero margin for error. Here is the operational standard behind every matter.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = iconList[idx] || ShieldCheck;

            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-[#6b1728] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif font-bold text-[#f4c8d1]">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#f4c8d1] group-hover:bg-[#6b1728] group-hover:text-white transition-colors duration-160">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-white mb-2.5 group-hover:text-[#f4c8d1] transition-colors duration-150">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#27272a] text-[10px] font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors duration-150">
                  {pillar.highlight}
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
