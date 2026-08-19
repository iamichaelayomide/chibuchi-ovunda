import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldCheck, ArrowRight } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How is client confidentiality and attorney-client privilege protected?",
      a: "Confidentiality is the cornerstone of every engagement. A comprehensive Non-Disclosure Agreement (NDA) is executed prior to receiving any files. All matter documents are accessed strictly through encrypted cloud repositories (Google Workspace / Dropbox / Clio) with role-based permissions and zero data stored on unencrypted local drives."
    },
    {
      q: "What is your turnaround time for urgent brief formatting or court filings?",
      a: "Routine document formatting, pleadings indexing, and meeting summaries are typically delivered within 12 to 24 hours. Priority same-day turnaround is available for urgent motion filings and expedited contract reviews with an under 2-hour response SLA on active matters."
    },
    {
      q: "Which legal technology and cloud platforms do you support?",
      a: "I integrate directly into Clio, Google Workspace, Microsoft 365, Dropbox, DocuSign, Adobe Acrobat Pro, Canva, and standard court electronic filing portals. There is no software switching required on your end."
    },
    {
      q: "Do you offer ongoing monthly retainers or ad-hoc matter support?",
      a: "Both structures are supported. Most law chambers choose a dedicated monthly retainer for predictable practice operations and guaranteed weekly hours. Ad-hoc matter retainers are also available for litigation spikes, trial prep, or special corporate transactions."
    },
    {
      q: "Where are you located and how do you coordinate across timezones?",
      a: "I am based in Akure, Nigeria and collaborate seamlessly with legal professionals across West Africa, the United Kingdom, North America, and internationally. Communication is maintained via priority email, shared matter task boards, and scheduled virtual conferences."
    },
    {
      q: "What is the onboarding process to get started?",
      a: "Onboarding is completed in under 24 hours: 1) Initial discovery consultation to define practice scope, 2) Mutual NDA execution and retainer confirmation, 3) Permission setup in your existing cloud repository. Work begins immediately."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-[#e4e4e7]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3"
          >
            04 / COMMON INQUIRIES
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl sm:text-5xl font-serif font-bold text-[#09090b] tracking-tight leading-tight mb-4"
          >
            Frequently asked questions.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="text-sm sm:text-base text-[#52525b] leading-relaxed font-light"
          >
            Clear answers regarding confidentiality protocols, software integration, SLAs, and retainer terms.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-[#e4e4e7] rounded-2xl overflow-hidden bg-[#faf9f5] transition-colors duration-150"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 active:scale-[0.99] transition-transform duration-150 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold font-serif text-[#09090b]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-150 ${
                      isOpen ? "bg-[#09090b] text-white" : "bg-white border border-[#e4e4e7] text-[#09090b]"
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
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[#52525b] leading-relaxed font-light border-t border-[#e4e4e7]/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#faf9f5] border border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold font-serif text-[#09090b] mb-0.5">
              Have a specific question about your active matters?
            </h4>
            <p className="text-xs text-[#52525b] font-light">
              Send your inquiry directly for a direct response within hours.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-150 shrink-0"
          >
            <span>Ask a Question</span>
          </a>
        </div>

      </div>
    </section>
  );
};
