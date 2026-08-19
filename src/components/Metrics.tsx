import React from "react";
import { motion } from "framer-motion";
import { METRICS_DATA } from "../data/portfolioData";

export const Metrics: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#e4e4e7]">
          {METRICS_DATA.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.23, 1, 0.32, 1] }}
              className={`flex flex-col justify-center ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}
            >
              <div className="flex items-baseline gap-0.5 mb-1.5">
                {item.prefix && (
                  <span className="text-xl sm:text-2xl font-serif text-[#6b1728] font-bold">
                    {item.prefix}
                  </span>
                )}
                <span className="text-3xl sm:text-5xl font-serif font-bold text-[#09090b] tracking-tight">
                  {item.value}
                </span>
                {item.suffix && (
                  <span className="text-xl sm:text-2xl font-serif text-[#6b1728] font-bold">
                    {item.suffix}
                  </span>
                )}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#09090b] tracking-tight mb-1">
                {item.label}
              </h3>
              <p className="text-[11px] text-[#71717a] font-light leading-snug">
                {item.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
