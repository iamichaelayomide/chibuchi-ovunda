import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderKanban,
  FileCheck,
  MailCheck,
  SearchCheck,
  Workflow,
  ChevronDown,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { SERVICES_DATA } from "../data/portfolioData";
import { ServiceItem } from "../types";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  FolderKanban,
  FileCheck,
  MailCheck,
  SearchCheck,
  Workflow,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#fffaf7] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#a83254] mb-3"
          >
            How I Can Help
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0b0b0b] tracking-tight leading-tight mb-5"
          >
            Strategic support. <br />
            <span className="font-serif italic font-normal text-[#a83254]">Seamless execution.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#0b0b0b]/75 leading-relaxed font-light"
          >
            I provide dependable legal administrative and operational support so you can focus on practicing law, serving clients, and growing your firm.
          </motion.p>
        </div>

        {/* 5-Column Grid on Large Screens / Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || FolderKanban;
            const isExpanded = expandedServiceId === service.id;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#e6cbd1] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-[#a83254]/40 group relative"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#f4c8d1] text-[#0b0b0b] flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#0b0b0b] group-hover:text-[#f4c8d1] transition-colors shadow-xs">
                      {service.number}
                    </div>
                    <div className="p-2 rounded-xl bg-[#fff0f3] text-[#a83254] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-serif text-[#0b0b0b] mb-2.5 group-hover:text-[#a83254] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#0b0b0b]/75 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Deliverables */}
                  <div className="pt-2 border-t border-[#e6cbd1]/40">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="w-full flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#a83254] py-1.5 focus:outline-none hover:opacity-80 transition-opacity"
                    >
                      <span>{isExpanded ? "Hide Details" : "Key Deliverables"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pt-2"
                        >
                          <ul className="space-y-1.5 mb-3">
                            {service.deliverables.map((item, dIdx) => (
                              <li
                                key={dIdx}
                                className="text-[11px] text-[#0b0b0b]/80 flex items-start gap-1.5 leading-snug"
                              >
                                <CheckCircle2 className="w-3 h-3 text-[#a83254] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="p-2 rounded-lg bg-[#fff0f3] text-[10px] font-semibold text-[#a83254] flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" />
                            <span>{service.turnaround}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-6 pt-3">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0b0b0b]/5 text-[#0b0b0b] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 group-hover:bg-[#0b0b0b] group-hover:text-white transition-all duration-300"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Centered Button */}
        <div className="mt-14 text-center">
          <a
            href="#work"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#0b0b0b] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#a83254] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
          >
            <span>Explore Selected Work Samples</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
