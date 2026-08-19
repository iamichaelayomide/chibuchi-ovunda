import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, HeartHandshake, Quote, Star } from "lucide-react";
import { TRUST_PILLARS, TESTIMONIALS } from "../data/portfolioData";

export const TrustPillars: React.FC = () => {
  const iconList = [ShieldCheck, Target, Zap, HeartHandshake];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#0b0b0b] text-white relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c84f70]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#f4c8d1] mb-3"
          >
            Built on Absolute Trust
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight mb-5"
          >
            Confidential. Reliable. <br />
            <span className="font-serif italic font-normal text-[#f4c8d1]">Uncompromisingly Professional.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed font-light"
          >
            The legal industry demands discretion, punctuality, and flawless execution. Here is the operational philosophy behind every engagement.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = iconList[idx] || ShieldCheck;

            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#f4c8d1]/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Monogram / Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-bold text-[#f4c8d1]">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#f4c8d1] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-[#f4c8d1] mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/50 group-hover:text-[#f4c8d1] transition-colors">
                  {pillar.highlight}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Testimonials / Endorsement Strip */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f4c8d1]">
              Attorney & Client Praise
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative"
              >
                <div className="flex items-center gap-1 text-[#f4c8d1] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-white/90 font-serif italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#a83254] text-white flex items-center justify-center font-bold text-xs">
                    ⚖️
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.author}</p>
                    <p className="text-[11px] text-white/60">{t.firm}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
