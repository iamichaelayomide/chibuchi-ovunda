import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  FolderKanban,
  FileCheck,
  MailCheck,
  SearchCheck,
  Workflow,
  ArrowRight,
  Check,
  Clock
} from "lucide-react";
import { SERVICES_DATA } from "../data/portfolioData";
import { ServiceItem } from "../types";

interface ServicesProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForConsult }) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#faf9f5] border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Center-Aligned Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
            01 / CORE DELIVERABLES
          </p>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#09090b] tracking-tight leading-tight mb-5 font-heading">
            Legal practice capabilities, <br />
            <span className="text-[#6b1728] font-normal">structured by discipline.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light">
            Select a legal support area below to inspect specific deliverables, standard turnaround times, and practice workflows.
          </p>
        </div>

        {/* Editorial Master-Detail Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-t border-[#e4e4e7] pt-8">
          
          {/* Left: Clean Numbered Index Rows */}
          <div className="lg:col-span-5 divide-y divide-[#e4e4e7]">
            {SERVICES_DATA.map((service) => {
              const isActive = activeService.id === service.id;

              return (
                <button
                  type="button"
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`w-full py-5 text-left flex items-center justify-between group transition-all duration-150 active:scale-[0.99] ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold ${isActive ? "text-[#6b1728]" : "text-[#71717a]"}`}>
                      {service.number}
                    </span>
                    <div>
                      <h3 className={`text-base sm:text-lg font-bold transition-colors duration-150 font-heading ${
                        isActive ? "text-[#09090b]" : "text-[#52525b] group-hover:text-[#09090b]"
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#71717a] font-light mt-0.5 line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-none flex items-center justify-center shrink-0 transition-all duration-150 ${
                    isActive ? "bg-[#09090b] text-white" : "bg-transparent text-[#71717a] group-hover:bg-[#e4e4e7]"
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Expansive Detail View */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white rounded-none p-8 sm:p-12 border border-[#e4e4e7] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e4e4e7]">
                    <span className="text-xs font-mono font-bold text-[#6b1728]">
                      SERVICE AREA {activeService.number}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#52525b]">
                      <Clock className="w-3.5 h-3.5 text-[#6b1728]" />
                      <span>{activeService.turnaround}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#09090b] mb-4 font-heading">
                    {activeService.title}
                  </h3>

                  <p className="text-sm text-[#52525b] leading-relaxed mb-8 font-light">
                    {activeService.fullDesc}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#09090b] mb-4">
                      Core Outputs & Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#09090b] font-medium leading-snug">
                          <Check className="w-4 h-4 text-[#6b1728] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#71717a] font-light">
                    Retainer and ad-hoc matter coverage available.
                  </span>
                  <a
                    href="#contact"
                    onClick={() => onSelectServiceForConsult(activeService.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded-none bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    <span>Request {activeService.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
