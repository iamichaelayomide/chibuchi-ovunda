import React from "react";
import { motion } from "framer-motion";
import { Calendar, MailCheck, FolderKanban, FileText } from "lucide-react";
import { CORE_CAPABILITY_PILLARS } from "../data/portfolioData";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  MailCheck,
  FileCheck: FileText,
  FolderKanban,
};

export const Metrics: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7] pattern-dots-light">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-2">
          PRIMARY SKILLS & WORKFLOWS
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#09090b] tracking-tight mb-10 font-heading">
          Dedicated administrative assistance for your daily practice.
        </h2>

        {/* 4 Authentic Capability Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_CAPABILITY_PILLARS.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Calendar;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#faf9f5] border border-[#e4e4e7] text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e4e4e7] flex items-center justify-center text-[#6b1728] mb-3 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#09090b] tracking-tight mb-1 font-heading">
                  {item.title}
                </h3>
                
                <p className="text-xs text-[#71717a] font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
