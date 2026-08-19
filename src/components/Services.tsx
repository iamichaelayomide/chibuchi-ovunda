import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MailCheck,
  FileCheck,
  SearchCheck,
  FolderKanban,
  ArrowRight,
  Check,
  Clock
} from "lucide-react";
import { SERVICES_DATA } from "../data/portfolioData";
import { ServiceItem } from "../types";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  MailCheck,
  FileCheck,
  SearchCheck,
  FolderKanban,
};

interface ServicesProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForConsult }) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#faf9f5] border-b border-[#e4e4e7]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Center-Aligned Section Header */}
        <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
          01 / CORE DELIVERABLES
        </p>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#09090b] tracking-tight leading-tight mb-5 font-heading">
          Legal practice capabilities, <br />
          <span className="text-[#6b1728] font-normal">structured by discipline.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light max-w-2xl mx-auto mb-12">
          Select a legal support area below to inspect specific deliverables, standard turnaround times, and practice workflows.
        </p>

        {/* iOS-Style Segmented Service Selector Tabs (Zero Empty Side Space) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-[#09090b]/5 p-2 rounded-2xl border border-[#09090b]/10 max-w-4xl mx-auto">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Calendar;
            const isActive = activeService.id === service.id;

            return (
              <button
                type="button"
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-160 active:scale-[0.97] ${
                  isActive
                    ? "bg-white text-[#09090b] shadow-sm font-heading"
                    : "text-[#09090b]/70 hover:text-[#09090b] hover:bg-white/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#6b1728]" : "text-[#71717a]"}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Centered iOS-Style Detail Plate */}
        <div className="max-w-4xl mx-auto text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e4e4e7] shadow-sm"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e4e4e7]">
                <span className="text-xs font-mono font-bold text-[#6b1728] uppercase tracking-wider">
                  SERVICE AREA {activeService.number}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#52525b] bg-[#faf9f5] px-3 py-1 rounded-lg border border-[#e4e4e7]">
                  <Clock className="w-3.5 h-3.5 text-[#6b1728]" />
                  <span>{activeService.turnaround}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#09090b] mb-4 font-heading">
                {activeService.title}
              </h3>

              <p className="text-sm sm:text-base text-[#52525b] leading-relaxed mb-8 font-light">
                {activeService.fullDesc}
              </p>

              {/* Deliverables Grid */}
              <div className="mb-10">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#09090b] mb-4">
                  Core Outputs & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeService.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#faf9f5] border border-[#e4e4e7] text-xs sm:text-sm text-[#09090b] font-medium leading-snug"
                    >
                      <Check className="w-4 h-4 text-[#6b1728] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#71717a] font-light">
                  Retainer and ad-hoc matter coverage available.
                </span>
                <a
                  href="#contact"
                  onClick={() => onSelectServiceForConsult(activeService.title)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
