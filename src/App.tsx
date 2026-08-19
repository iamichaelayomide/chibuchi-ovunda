import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { Metrics } from "./components/Metrics";
import { Services } from "./components/Services";
import { WorkShowcase } from "./components/WorkShowcase";
import { ToolsGrid } from "./components/ToolsGrid";
import { TrustPillars } from "./components/TrustPillars";
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

  const handleOpenConsultation = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffaf7] text-[#0b0b0b] relative font-sans selection:bg-[#f4c8d1] selection:text-[#0b0b0b]">
      {/* Dynamic Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Dynamic Hero */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Double Marquee Tickers */}
        <MarqueeTicker />

        {/* Live Animated Metrics */}
        <Metrics />

        {/* Dynamic Services Matrix */}
        <Services onSelectService={handleSelectService} />

        {/* Selected Work & Case Studies with Lightbox */}
        <WorkShowcase />

        {/* Tech Stack & Legal Tools Grid */}
        <ToolsGrid />

        {/* Trust Pillars & Testimonials */}
        <TrustPillars />

        {/* Interactive Consultation & Contact */}
        <ConsultationContact
          preselectedService={selectedServiceForForm}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <ScrollToTop />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
