import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { Metrics } from "./components/Metrics";
import { ProblemSolutionHowItWorks } from "./components/ProblemSolutionHowItWorks";
import { Services } from "./components/Services";
import { WorkShowcase } from "./components/WorkShowcase";
import { ToolsGrid } from "./components/ToolsGrid";
import { TrustPillars } from "./components/TrustPillars";
import { FAQ } from "./components/FAQ";
import { ConsultationContact } from "./components/ConsultationContact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Toast } from "./components/Toast";

export function App() {
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForForm(serviceTitle);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-[#09090b] relative font-sans selection:bg-[#6b1728] selection:text-white">
      {/* 01: Top Architectural Header */}
      <Header />

      {/* Main Single-Offer Landing Progression */}
      <main className="flex-1">
        
        {/* 01: Hero (Outcome, Audience, Proof Signals, Direct CTA) */}
        <Hero onSelectServiceForConsult={handleSelectService} />

        {/* 02: Credibility Ticker Strip */}
        <MarqueeTicker />

        {/* 03: Verified Proof Metrics Bar */}
        <Metrics />

        {/* 04: The Problem -> Solution & 3-Step Onboarding */}
        <ProblemSolutionHowItWorks />

        {/* 05: Core Practice Services & Deliverables Catalog */}
        <Services onSelectServiceForConsult={handleSelectService} />

        {/* 06: Verified Work Showcase & Case Proof */}
        <WorkShowcase />

        {/* 07: Tech Stack & System Integration */}
        <ToolsGrid />

        {/* 08: Trust & Confidentiality Architecture */}
        <TrustPillars />

        {/* 09: Objection Handling FAQ */}
        <FAQ />

        {/* 10: Final Direct Consultation Builder */}
        <ConsultationContact
          preselectedService={selectedServiceForForm}
          onShowToast={showToast}
        />
      </main>

      {/* 11: Editorial Footer */}
      <Footer />

      {/* Floating Utilities */}
      <ScrollToTop />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
