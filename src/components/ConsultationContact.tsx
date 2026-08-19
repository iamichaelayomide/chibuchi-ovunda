import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  ShieldCheck,
  ChevronDown,
  ArrowRight
} from "lucide-react";
import { PORTFOLIO_INFO, SERVICES_DATA } from "../data/portfolioData";

interface ConsultationContactProps {
  preselectedService?: string;
  onShowToast: (msg: string) => void;
}

export const ConsultationContact: React.FC<ConsultationContactProps> = ({
  preselectedService,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Calendar Management");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    { title: "Calendar Management", desc: "Hearings, appointments, buffer times & reminders" },
    { title: "Email Management", desc: "Inbox triage, custom labels & response drafting" },
    { title: "Document Management", desc: "Agreements, MOUs, briefs & document systems" },
    { title: "Minute Taking & Records", desc: "Consultation summaries, decisions & covenants" },
    { title: "File Management", desc: "Standardized 8-folder hierarchy & cloud permissions" },
    { title: "Full Practice Retainer", desc: "Dedicated monthly virtual legal operations" },
  ];

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    onShowToast("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Legal Support Inquiry: ${formData.firm || formData.name || "Legal Practice"}`);
    const body = encodeURIComponent(
      `Hello Chibuchi,

My name is ${formData.name} with ${formData.firm || "my practice"}.

Primary Area of Support: ${selectedService}

Message:
${formData.message || "I would like to discuss your availability for virtual legal support."}

Best regards,
${formData.name}
${formData.email}`
    );

    window.open(`mailto:${PORTFOLIO_INFO.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 pattern-grid-blush border-b border-[#09090b]/15">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Section Tag */}
        <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
          LET’S WORK TOGETHER
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold text-[#09090b] tracking-tight leading-tight mb-4 font-heading">
          Initiate a practice consultation.
        </h2>

        <p className="text-sm sm:text-base text-[#09090b]/80 leading-relaxed font-light max-w-lg mx-auto mb-10">
          Have an active matter caseload or need dependable calendar and document support? Send a direct inquiry below to discuss your practice requirements.
        </p>

        {/* Center-Aligned Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#09090b]/15 shadow-xl text-left">
          
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-[#09090b] text-[#f5cad5] flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                ✓
              </div>
              <h3 className="text-xl font-bold text-[#09090b] mb-2 font-heading">
                Inquiry Prepared
              </h3>
              <p className="text-xs sm:text-sm text-[#52525b] max-w-md mx-auto mb-6 leading-relaxed font-light">
                Your email client has been opened with your inquiry details. You can also contact directly anytime:
              </p>
              <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#faf9f5] border border-[#e4e4e7] text-xs font-bold text-[#09090b] mb-6">
                <span>{PORTFOLIO_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-[#09090b] text-white hover:bg-[#6b1728] active:scale-[0.95] transition-all"
                  aria-label="Copy email"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="block mx-auto text-xs font-bold text-[#6b1728] underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Primary Area of Support Custom Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-1.5">
                  Primary Area of Support
                </label>
                
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#09090b] transition-all"
                >
                  <span className="font-semibold text-[#09090b]">{selectedService}</span>
                  <ChevronDown className={`w-4 h-4 text-[#71717a] transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-[#e4e4e7] rounded-2xl shadow-xl z-30 overflow-hidden py-1.5 divide-y divide-[#e4e4e7]/60"
                    >
                      {serviceOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt.title}
                          onClick={() => {
                            setSelectedService(opt.title);
                            setDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex items-start justify-between gap-3 hover:bg-[#faf9f5] transition-colors ${
                            selectedService === opt.title ? "bg-[#faf9f5]" : ""
                          }`}
                        >
                          <div>
                            <p className="text-xs font-bold text-[#09090b] font-heading">{opt.title}</p>
                            <p className="text-[11px] text-[#71717a] font-light">{opt.desc}</p>
                          </div>
                          {selectedService === opt.title && (
                            <Check className="w-4 h-4 text-[#6b1728] shrink-0 mt-0.5" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Name & Law Firm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Barrister / Attorney Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#09090b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-1.5">
                    Chambers or Practice Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Legal Chambers"
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#09090b]"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="counsel@legalpractice.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#09090b]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-1.5">
                  Matter Details / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe matters, calendar scheduling, or brief formatting needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#09090b]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all shadow-md group"
              >
                <span>Submit Inquiry & Open Email Client</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          )}

          {/* Quick Copy Email Strip */}
          <div className="mt-8 pt-6 border-t border-[#e4e4e7] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-[#52525b]">
              <Mail className="w-4 h-4 text-[#6b1728]" />
              <span>{PORTFOLIO_INFO.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09090b] hover:text-[#6b1728] active:scale-[0.95] transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy email address"}</span>
            </button>
          </div>

        </div>

        {/* Confidentiality Guarantee */}
        <div className="mt-6 inline-flex items-center gap-2 text-xs text-[#09090b]/75 font-mono">
          <ShieldCheck className="w-4 h-4 text-[#6b1728]" />
          <span>100% Confidentiality & Non-Disclosure Protected</span>
        </div>

      </div>
    </section>
  );
};
