import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Maximize2,
  X,
  ArrowRight
} from "lucide-react";
import { WORK_SAMPLES } from "../data/portfolioData";
import { WorkSample } from "../types";

export const WorkShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalSample, setActiveModalSample] = useState<WorkSample | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalSample(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = [
    { id: "all", label: "All Selected Work" },
    { id: "calendar", label: "Calendar Management" },
    { id: "email", label: "Email Management" },
    { id: "document", label: "Document Management" },
    { id: "minutes", label: "Minute Taking" },
    { id: "file", label: "File Management" },
  ];

  const filteredSamples =
    selectedCategory === "all"
      ? WORK_SAMPLES
      : WORK_SAMPLES.filter((s) => s.category === selectedCategory);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7] pattern-dots-light">
      <div className="max-w-7xl mx-auto">
        
        {/* Center-Aligned Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
            02 / CASE PROOF & DELIVERABLES
          </p>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#09090b] tracking-tight leading-tight mb-5 font-heading">
            Verified case work, <br />
            <span className="text-[#6b1728] font-normal">redacted for confidentiality.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed font-light">
            Real calendar structures, custom email labels, commercial agreements, consultation minutes, and 8-folder matter archives. Click any sample to inspect the case breakdown.
          </p>
        </div>

        {/* Center-Aligned Filter Tabs (Zero Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12 border-b border-[#e4e4e7] pb-4">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-bold tracking-wider uppercase transition-all duration-150 py-1.5 relative ${
                  isSelected
                    ? "text-[#09090b]"
                    : "text-[#71717a] hover:text-[#09090b]"
                }`}
              >
                <span>{cat.label}</span>
                {isSelected && (
                  <motion.div
                    layoutId="work-active-line"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-[#09090b]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Work Plates Grid (Architectural Framing, Zero Clunky Boxed Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSamples.map((sample) => (
            <article
              key={sample.id}
              onClick={() => setActiveModalSample(sample)}
              className="group cursor-pointer flex flex-col bg-white p-3 border border-[#e4e4e7] shadow-xs hover:border-[#09090b] transition-all hover:shadow-md"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] bg-[#09090b] overflow-hidden border border-[#e4e4e7] mb-3.5">
                <img
                  src={sample.imageSrc}
                  alt={sample.title}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300 ease-out"
                  loading="lazy"
                />

                {/* Category Tag */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#09090b]/90 text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                  {sample.categoryLabel}
                </div>

                {/* Redacted Tag */}
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-white text-[#6b1728] text-[9px] font-mono font-bold flex items-center gap-1 border border-[#e4e4e7]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Redacted</span>
                </div>

                {/* Hover Trigger */}
                <div className="absolute inset-0 bg-[#09090b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-160 flex items-center justify-center text-white">
                  <div className="px-4 py-2 bg-white text-[#09090b] font-bold text-xs flex items-center gap-1.5 shadow-md font-heading uppercase tracking-wider">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Case Breakdown</span>
                  </div>
                </div>
              </div>

              {/* Editorial Caption */}
              <div className="flex items-start justify-between gap-3 p-1.5">
                <div>
                  <h3 className="text-base font-bold text-[#09090b] group-hover:text-[#6b1728] transition-colors duration-150 font-heading">
                    {sample.title}
                  </h3>
                  <p className="text-xs text-[#52525b] leading-relaxed font-light mt-1 line-clamp-2">
                    {sample.shortDesc}
                  </p>
                </div>
                <div className="w-6 h-6 border border-[#e4e4e7] flex items-center justify-center shrink-0 text-[#09090b] group-hover:bg-[#09090b] group-hover:text-white group-hover:border-[#09090b] transition-all duration-150 mt-1">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Sharp Architectural Cut) */}
      <AnimatePresence>
        {activeModalSample && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setActiveModalSample(null)}
              className="fixed inset-0 bg-[#09090b]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-4xl bg-white overflow-hidden shadow-2xl border border-[#e4e4e7] z-10 my-auto max-h-[90vh] flex flex-col md:flex-row"
            >
              <button
                onClick={() => setActiveModalSample(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-[#09090b] text-white hover:bg-[#6b1728] active:scale-[0.95] transition-all duration-150 shadow-md"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="md:w-1/2 bg-[#09090b] relative flex items-center justify-center p-6 min-h-[280px]">
                <img
                  src={activeModalSample.imageSrc}
                  alt={activeModalSample.title}
                  className="max-h-[460px] w-full object-contain shadow-xl"
                />
              </div>

              <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[500px] md:max-h-[580px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#6b1728] block mb-2">
                    {activeModalSample.categoryLabel}
                  </span>

                  <h3 className="text-2xl font-bold text-[#09090b] mb-3 font-heading">
                    {activeModalSample.title}
                  </h3>

                  <p className="text-xs text-[#52525b] leading-relaxed mb-6 font-light">
                    {activeModalSample.fullDesc}
                  </p>

                  <div className="space-y-3.5 mb-6">
                    <div className="p-3.5 bg-[#faf9f5] border border-[#e4e4e7]">
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-1">
                        Challenge
                      </h4>
                      <p className="text-xs text-[#52525b] leading-relaxed font-light">
                        {activeModalSample.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#faf9f5] border border-[#e4e4e7]">
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-1">
                        Execution
                      </h4>
                      <p className="text-xs text-[#52525b] leading-relaxed font-light">
                        {activeModalSample.solution}
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#09090b] text-white border border-[#27272a]">
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f4c8d1] mb-1">
                        Outcome
                      </h4>
                      <p className="text-xs text-white/85 leading-relaxed font-light">
                        {activeModalSample.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e4e4e7]">
                  <a
                    href="#contact"
                    onClick={() => setActiveModalSample(null)}
                    className="w-full py-3.5 bg-[#09090b] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 shadow-sm"
                  >
                    <span>Request Similar Workflow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
