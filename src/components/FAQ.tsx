import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How is client confidentiality and attorney-client privilege protected?",
      a: "Confidentiality is the foundation of every engagement. A mutual Non-Disclosure Agreement (NDA) is executed prior to reviewing any matter records. All case files are accessed strictly through encrypted cloud repositories (Google Workspace / Dropbox / Clio) with role-based permissions and zero data stored on unencrypted personal drives."
    },
    {
      q: "What is your turnaround time for urgent brief formatting or court filings?",
      a: "Standard turnaround for document formatting, brief styling, and meeting minutes is same-day to 24 hours. Priority fast-track turnaround is available for urgent motion filings with an under 2-hour response SLA on active matters."
    },
    {
      q: "Which legal technology and cloud platforms do you support?",
      a: "I integrate directly into Clio, Google Workspace, Microsoft 365, Dropbox, DocuSign, Adobe Acrobat Pro, Canva, and standard court electronic filing portals. There is no software switching required on your end."
    },
    {
      q: "Do you offer ongoing monthly retainers or ad-hoc matter support?",
      a: "Both structures are supported. Most law chambers select a dedicated monthly retainer for guaranteed weekly hours and proactive operational coverage. Ad-hoc matter retainers are also available for trial preparation spikes and commercial transactions."
    },
    {
      q: "Where are you located and how do you coordinate across timezones?",
      a: "I am based in Akure, Nigeria and collaborate smoothly with legal practices across West Africa, the United Kingdom, North America, and internationally. Communication is maintained via priority email, shared matter task boards, and scheduled virtual conferences."
    },
    {
      q: "What is the onboarding process to get started?",
      a: "Onboarding takes less than 24 hours: 1) Initial discovery consultation to align on practice requirements, 2) Mutual NDA execution and retainer confirmation, 3) Permission setup in your existing cloud repository. Active matter support begins immediately."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
            05 / COMMON INQUIRIES
          </p>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#09090b] tracking-tight leading-tight mb-4">
            Frequently asked questions.
          </h2>

          <p className="text-sm sm:text-base text-[#52525b] leading-relaxed font-light">
            Direct answers regarding confidentiality protocols, software integration, SLAs, and retainer structures.
          </p>
        </div>

        {/* Clean Hairline Accordion (Zero Boxed Cards) */}
        <div className="border-t border-[#e4e4e7] divide-y divide-[#e4e4e7]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 active:scale-[0.99] transition-transform duration-150 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-serif text-[#09090b] group-hover:text-[#6b1728] transition-colors duration-150">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-150 ${
                      isOpen ? "bg-[#09090b] text-white" : "bg-[#faf9f5] text-[#71717a] group-hover:bg-[#e4e4e7]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-xs sm:text-sm text-[#52525b] leading-relaxed font-light max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Link */}
        <div className="mt-12 pt-6 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#71717a] font-light">
            Have a custom workflow inquiry?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#09090b] hover:text-[#6b1728] transition-colors"
          >
            <span>Ask a specific question directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
