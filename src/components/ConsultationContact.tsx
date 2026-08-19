import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  ShieldCheck,
  CheckCircle2,
  Lock,
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
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [urgency, setUrgency] = useState("Immediate");
  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices((prev) => [...prev, preselectedService]);
    }
  }, [preselectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    onShowToast("Email address copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Legal Support Inquiry: ${formData.firm || formData.name || "Legal Practice"}`);
    const body = encodeURIComponent(
      `Hello Chibuchi,

My name is ${formData.name} with ${formData.firm || "my practice"}.

I am interested in legal support services for:
${selectedServices.length > 0 ? selectedServices.map((s) => "• " + s).join("\n") : "• General Practice Administration"}

Timeline / Requirement: ${urgency}

Matter / Project Details:
${formData.message || "Please let me know your availability for an introductory discussion."}

Best regards,
${formData.name}
${formData.email}`
    );

    window.open(`mailto:${PORTFOLIO_INFO.email}?subject=${subject}&body=${body}`, "_blank");
  };

  const expectations = [
    {
      title: "Direct Communication",
      desc: "Prompt acknowledgment of all inquiries and structured status updates."
    },
    {
      title: "Rigorous Confidentiality",
      desc: "Strict non-disclosure protocols applied to all files, communications, and matter data."
    },
    {
      title: "Court-Ready Standard",
      desc: "Impeccable formatting, citation precision, and adherence to legal conventions."
    },
    {
      title: "Predictable Turnarounds",
      desc: "Transparent timelines, milestone tracking, and dependable ongoing support."
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#faf9f5] border-b border-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#e4e4e7] shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] block mb-2">
                05 / DIRECT INQUIRY
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#09090b] tracking-tight mb-2.5">
                Initiate a consultation.
              </h2>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-light">
                Please provide brief context on your practice requirements below to prepare an introductory consultation.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="p-8 rounded-2xl bg-[#faf9f5] border border-[#e4e4e7] text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#09090b] text-white flex items-center justify-center mx-auto mb-4 shadow-xs">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#09090b] mb-2">
                  Inquiry Prepared
                </h3>
                <p className="text-xs sm:text-sm text-[#52525b] max-w-md mx-auto mb-6 leading-relaxed font-light">
                  Your email client has been opened with your inquiry details. You can also contact directly:
                </p>
                <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e4e4e7] text-xs font-bold text-[#09090b] mb-6">
                  <span>{PORTFOLIO_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-[#09090b] text-white hover:bg-[#6b1728] active:scale-[0.95] transition-all duration-150"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs font-bold text-[#6b1728] underline hover:opacity-80 active:scale-[0.98] transition-transform"
                >
                  Prepare another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Multi-Select Services */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-2.5">
                    Services Required
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = selectedServices.includes(srv.title);
                      return (
                        <button
                          type="button"
                          key={srv.id}
                          onClick={() => toggleService(srv.title)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide active:scale-[0.96] transition-all duration-150 ${
                            isSelected
                              ? "bg-[#09090b] text-white shadow-xs"
                              : "bg-[#f4f4f5] text-[#09090b] hover:bg-[#e4e4e7] border border-[#e4e4e7]"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 inline mr-1" />}
                          {srv.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-2.5">
                    Engagement Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Immediate Need", "Next 2 Weeks", "Ongoing Retainer"].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setUrgency(opt)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold text-center border active:scale-[0.96] transition-all duration-150 ${
                          urgency === opt
                            ? "bg-[#09090b] text-white border-[#09090b] shadow-xs"
                            : "bg-[#faf9f5] text-[#09090b] border-[#e4e4e7] hover:border-[#d4d4d8]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
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
                      className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#09090b] transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-1.5">
                      Practice or Law Chambers
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Legal Chambers"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#09090b] transition-shadow"
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
                    className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#09090b] transition-shadow"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#09090b] mb-1.5">
                    Brief Matter or Support Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe matters, brief formatting requirements, intake triage, or administrative support..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#e4e4e7] bg-[#faf9f5] text-xs text-[#09090b] focus:outline-none focus:ring-2 focus:ring-[#09090b] transition-shadow"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#09090b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#6b1728] active:scale-[0.97] transition-all duration-160 shadow-sm group"
                >
                  <span>Submit Inquiry & Open Email</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-160" />
                </button>
              </form>
            )}

            {/* Quick Copy Strip */}
            <div className="mt-8 pt-6 border-t border-[#e4e4e7] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#52525b]">
                <Mail className="w-4 h-4 text-[#6b1728]" />
                <span>{PORTFOLIO_INFO.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09090b] hover:text-[#6b1728] active:scale-[0.95] transition-all duration-150"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to clipboard" : "Copy email address"}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Standard of Practice & Security Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6b1728] block mb-2">
                PRACTICE STANDARD
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#09090b] tracking-tight mb-6">
                What to expect from every engagement
              </h3>

              <div className="space-y-3.5">
                {expectations.map((exp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#e4e4e7] shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#f4f4f5] text-[#6b1728] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold font-serif text-[#09090b] mb-0.5">
                        {exp.title}
                      </h4>
                      <p className="text-xs text-[#52525b] leading-relaxed font-light">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Confidentiality Guarantee Card */}
            <div className="mt-8 p-6 rounded-2xl bg-[#09090b] text-white border border-[#27272a] shadow-sm">
              <div className="flex items-center gap-2 text-[#f4c8d1] mb-2 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#f4c8d1]" />
                <span>Privilege & Non-Disclosure Guarantee</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                All client communications, case files, and consultation inquiries are protected under strict non-disclosure practices in accordance with professional legal standards.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
