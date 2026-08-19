import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderKanban,
  FileCheck,
  MailCheck,
  SearchCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles
} from "lucide-react";
import { SERVICES_DATA } from "../data/portfolioData";
import { ServiceItem } from "../types";

const iconMap: Record<string, React.ElementType> = {
  FolderKanban,
  FileCheck,
  MailCheck,
  SearchCheck,
  Workflow,
};

interface ServicesProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForConsult }) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#fbfbfa] border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs font-bold uppercase tracking-widest text-[#6b1728] mb-3"
          >
            Practice Capabilities
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#09090b] tracking-tight leading-tight mb-5"
          >
            Dedicated practice support, <br />
            <span className="font-serif italic font-normal text-[#6b1728]">customized to your workflow.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light"
          >
            Select a service area below to inspect specific deliverables, standard turnarounds, and practice workflows.
          </motion.p>
        </div>

        {/* 2-Column Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES_DATA.map((service, idx) => {
              const Icon = iconMap[service.iconName] || FolderKanban;
              const isActive = activeService.id === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  onClick={() => setActiveService(service)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-160 cursor-pointer active:scale-[0.98] flex items-center justify-between ${
                    isActive
                      ? "bg-[#09090b] text-white border-[#09090b] shadow-md"
                      : "bg-white text-[#09090b] border-[#e4e4e7] hover:border-[#d4d4d8] hover:bg-[#f4f4f5]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors duration-160 ${
                        isActive
                          ? "bg-[#6b1728] text-white"
                          : "bg-[#f4f4f5] text-[#09090b]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono font-bold ${isActive ? "text-[#a1a1aa]" : "text-[#71717a]"}`}>
                          {service.number}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold font-serif">
                          {service.title}
                        </h3>
                      </div>
                      <p className={`text-xs line-clamp-1 mt-0.5 font-light ${isActive ? "text-white/70" : "text-[#71717a]"}`}>
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-160 ${
                      isActive
                        ? "text-white translate-x-0.5"
                        : "text-[#a1a1aa] opacity-0 sm:opacity-100"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Selected Service Deep Dive Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e4e4e7] shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e4e4e7]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#6b1728]">
                        SERVICE {activeService.number}
                      </span>
                      <span className="text-xs text-[#d4d4d8]">/</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#09090b]">
                        {activeService.title}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] text-[11px] font-semibold text-[#09090b]">
                      <Clock className="w-3.5 h-3.5 text-[#6b1728]" />
                      <span>{activeService.turnaround}</span>
                    </div>
                  </div>

                  {/* Service Title & Full Description */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#09090b] mb-3">
                    {activeService.title}
                  </h3>
                  
                  <p className="text-sm text-[#52525b] leading-relaxed mb-8 font-light">
                    {activeService.fullDesc}
                  </p>

                  {/* Key Deliverables Checklist */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#09090b] mb-4">
                      Core Deliverables & Outputs
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-[#fbfbfa] border border-[#e4e4e7]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#6b1728] shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-[#09090b] leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Action */}
                <div className="pt-6 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#71717a] font-light">
                    Need this service customized to your practice?
                  </span>
                  
                  <a
                    href="#contact"
                    onClick={() => onSelectServiceForConsult(activeService.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-sm group"
                  >
                    <span>Request {activeService.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-160" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
