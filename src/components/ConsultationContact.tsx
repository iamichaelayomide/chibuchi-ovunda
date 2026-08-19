import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  ShieldCheck,
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
  const [selectedService, setSelectedService] = useState<string>("Calendar & Hearing Schedule Management");
  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    onShowToast("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Legal Support Inquiry: ${formData.firm || formData.name || "Practice"}`);
    const body = encodeURIComponent(
      `Hello Chibuchi,

My name is ${formData.name} with ${formData.firm || "my practice"}.

Service Interest: ${selectedService}

Message:
${formData.message || "I would like to discuss your availability for legal administrative and calendar support."}

Best regards,
${formData.name}
${formData.email}`
    );

    window.open(`mailto:${PORTFOLIO_INFO.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 pattern-grid-blush border-b border-[#09090b]/15">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Section Tag */}
        <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] mb-3">
          LET’S WORK TOGETHER
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold text-[#09090b] tracking-tight leading-tight mb-4 font-heading">
          Initiate a practice consultation.
        </h2>

        <p className="text-sm sm:text-base text-[#09090b]/80 leading-relaxed font-light max-w-xl mx-auto mb-10">
          Have an active matter caseload or need dependable calendar and document support? Send a direct inquiry below to discuss your requirements.
        </p>

        {/* Clean Center-Aligned Form Card */}
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
                Your email application has been opened with your inquiry. You can also email directly anytime:
              </p>
              <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#faf9f5] border border-[#e4e4e7] text-xs font-bold text-[#09090b] mb-6">
                <span>{PORTFOLIO_INFO.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-[#09090b] text-white hover:bg-[#6b1728] active:scale-[0.95] transition-all"
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
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Chips */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-3">
                  Primary Area of Support
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES_DATA.map((srv) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setSelectedService(srv.title)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide active:scale-[0.96] transition-all ${
                        selectedService === srv.title
                          ? "bg-[#09090b] text-white shadow-xs"
                          : "bg-[#faf9f5] text-[#09090b] hover:bg-[#e4e4e7] border border-[#e4e4e7]"
                      }`}
                    >
                      {selectedService === srv.title && <Check className="w-3 h-3 inline mr-1 text-[#f4c8d1]" />}
                      {srv.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Law Chambers */}
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

              {/* Submit */}
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
