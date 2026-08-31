import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import { Home } from "@/pages/Home";
import { Work } from "@/pages/Work";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { Showreel } from "@/pages/Showreel";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Careers } from "@/pages/Careers";
import { CareersApply } from "@/pages/CareersApply";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsConditions } from "@/pages/TermsConditions";
import { NotFound } from "@/pages/NotFound";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <main key={location.pathname} className="page-fade-in">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/showreel" element={<Showreel />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/apply" element={<CareersApply />} />
        <Route path="/apply" element={<CareersApply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policies" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <SmoothScrollProvider>
          <div className="min-h-screen bg-brand-bg font-sans text-brand-foreground antialiased selection:bg-brand-foreground selection:text-brand-bg transition-colors duration-300">
            <Header />
            <AnimatedRoutes />
            <Footer />
          </div>
        </SmoothScrollProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
