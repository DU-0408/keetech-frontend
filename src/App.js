import React, { useState, useCallback } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";
import ElevatorLoader from "./components/ElevatorLoader";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import PortalLogin from "./pages/PortalLogin";
import PortalRegister from "./pages/PortalRegister";
import PortalDashboard from "./pages/PortalDashboard";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="App"> 
      {isLoading && <ElevatorLoader onLoadingComplete={handleLoadingComplete} />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/portal/login" element={<PortalLogin />} />
          <Route path="/portal/register" element={<PortalRegister />} />
          <Route path="/portal/dashboard" element={<PortalDashboard />} />
          <Route path="/careers" element={<ComingSoonPage title="Careers Coming Soon" description="We're building an amazing careers page. Join us soon!" />} />
          <Route path="/blog" element={<ComingSoonPage title="Blog Coming Soon" description="Stay tuned for our latest insights and updates!" />} />
          <Route path="/faq" element={<ComingSoonPage title="FAQs Coming Soon" description="We're compiling the most frequently asked questions. Check back soon!" />} />
          <Route path="/portal" element={<ComingSoonPage title="Customer Portal Coming Soon" description="We're working on an enhanced customer portal experience. Stay tuned!" />} />
          <Route path="/coming-soon" element={<ComingSoonPage title="Coming Soon" description="This feature is under development. Stay tuned for updates!" />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
