import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  ShieldCheck,
  Clock,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { PORTFOLIO_INFO, SERVICES_DATA } from "../data/portfolioData";
import confetti from "canvas-confetti";

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
    onShowToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#c84f70", "#f4c8d1", "#0b0b0b", "#a83254"]
      });
    } catch {
      // ignore
    }

    setSubmitted(true);

    // Build pre-filled mailto
    const subject = encodeURIComponent(`Legal Support Inquiry - ${formData.firm || formData.name || "Law Practice"}`);
    const body = encodeURIComponent(
      `Hello Chibuchi,

My name is ${formData.name} with ${formData.firm || "my practice"}.

I am interested in legal support for:
${selectedServices.length > 0 ? selectedServices.map((s) => "• " + s).join("\n") : "• General Practice Operations"}

Urgency / Timeline: ${urgency}

Project / Matter Details:
${formData.message || "Please let me know your availability for an introductory call."}

Best regards,
${formData.name}
${formData.email}`
    );

    window.open(`mailto:${PORTFOLIO_INFO.email}?subject=${subject}&body=${body}`, "_blank");
  };

  const expectations = [
    {
      title: "Responsive Communication",
      desc: "Prompt acknowledgment of all inquiries and priority updates within hours."
    },
    {
      title: "Clear Processes & Timelines",
      desc: "Structured workflows, transparent task milestones, and 0 surprise delays."
    },
    {
      title: "High-Quality, Confidential Support",
      desc: "Impeccable legal document standards backed by strict non-disclosure protocol."
    },
    {
      title: "A Dedicated Practice Partner",
      desc: "A collaborative partner who genuinely cares about your firm’s growth and peace of mind."
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#f4c8d1] relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Consultation Builder */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#e6cbd1]">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a83254] block mb-2">
                Direct Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0b0b0b] tracking-tight mb-3">
                Let’s work together.
              </h2>
              <p className="text-xs sm:text-sm text-[#0b0b0b]/75 leading-relaxed font-light">
                Ready to simplify your workload, reclaim billable hours, and elevate your practice? Complete the form below to initiate an engagement.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#fff0f3] border border-[#e6cbd1] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#a83254] text-white flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0b0b0b] mb-2">
                  Inquiry Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-[#0b0b0b]/80 max-w-md mx-auto mb-6 leading-relaxed">
                  Your email client has been launched with your inquiry details. If it didn’t open automatically, feel free to send directly to:
                </p>
                <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white border border-[#e6cbd1] text-xs font-bold text-[#0b0b0b] mb-6">
                  <span>{PORTFOLIO_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-[#0b0b0b] text-white hover:bg-[#a83254] transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs font-bold text-[#a83254] underline hover:opacity-80"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Multi-Select Services Needed */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b0b0b] mb-2.5">
                    Select Services of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = selectedServices.includes(srv.title);
                      return (
                        <button
                          type="button"
                          key={srv.id}
                          onClick={() => toggleService(srv.title)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                            isSelected
                              ? "bg-[#0b0b0b] text-white shadow-sm"
                              : "bg-[#fff0f3] text-[#0b0b0b] hover:bg-[#feedf1] border border-[#e6cbd1]/60"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 inline mr-1" />}
                          {srv.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Urgency / Retainer Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b0b0b] mb-2.5">
                    Engagement Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Immediate Need", "Next 2 Weeks", "Ongoing Retainer"].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setUrgency(opt)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                          urgency === opt
                            ? "bg-[#a83254] text-white border-[#a83254] shadow-sm"
                            : "bg-white text-[#0b0b0b] border-[#e6cbd1] hover:border-[#a83254]/40"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0b0b0b] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Barrister / Attorney Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e6cbd1] bg-[#fffaf7] text-xs focus:outline-none focus:ring-2 focus:ring-[#c84f70]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0b0b0b] mb-1.5">
                      Law Firm / Practice
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chambers & Partners"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e6cbd1] bg-[#fffaf7] text-xs focus:outline-none focus:ring-2 focus:ring-[#c84f70]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b0b0b] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="attorney@lawfirm.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#e6cbd1] bg-[#fffaf7] text-xs focus:outline-none focus:ring-2 focus:ring-[#c84f70]"
                  />
                </div>

                {/* Brief Message / Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b0b0b] mb-1.5">
                    Brief Matter or Operational Needs
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share brief context on documents, trial fixtures, calendar triage, or support requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#e6cbd1] bg-[#fffaf7] text-xs focus:outline-none focus:ring-2 focus:ring-[#c84f70]"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0b0b0b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#a83254] transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span>Submit Inquiry & Open Direct Email</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}

            {/* Quick Copy Strip */}
            <div className="mt-8 pt-6 border-t border-[#e6cbd1] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#a83254]" />
                <span className="text-xs font-medium text-[#0b0b0b]">{PORTFOLIO_INFO.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a83254] hover:text-[#0b0b0b] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

          </div>

          {/* Right Column: What to Expect & Trust Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#a83254] block mb-2">
                Partnership Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0b0b0b] tracking-tight mb-6">
                What to expect when working together
              </h3>

              <div className="space-y-6">
                {expectations.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-white/60 backdrop-blur-sm"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#0b0b0b] text-[#f4c8d1] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-serif text-[#0b0b0b] mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-xs text-[#0b0b0b]/75 leading-relaxed font-light">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Confidentiality Pledge */}
            <div className="mt-8 p-6 rounded-2xl bg-[#0b0b0b] text-white border border-white/10">
              <div className="flex items-center gap-2 text-[#f4c8d1] mb-2 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Privilege Guarantee</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                All communications, case files, and consultation inquiries are treated with strict confidentiality in accordance with professional legal ethics.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
