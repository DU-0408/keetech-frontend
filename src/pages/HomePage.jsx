import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { Phone } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection limit={6} />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer extraMobilePadding />
      
      <ScrollToTopButton />

      {/* Floating Call Button - positioned above chat */}
      <a 
        href="tel:+919887400555"
        className="fixed bottom-28 right-6 z-40 bg-white/70 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl p-4 flex items-center gap-3 animate-float cursor-pointer hover:scale-105 transition-transform duration-200"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const isDark = document.documentElement.classList.contains('dark');
          const shadowColor = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.45)';
          e.currentTarget.style.boxShadow = `${x * 0.1}px ${y * 0.1}px 25px ${shadowColor}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <Phone className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Call us anytime</p>
          <p className="font-semibold">+91 98874 00555</p>
        </div>
      </a>
      <LiveChat />
    </div>
  );
};

export default HomePage;

