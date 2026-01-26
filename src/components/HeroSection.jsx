import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';
import { ArrowRight, Building2, CheckCircle2, Phone } from 'lucide-react';

// Elevator images for the background carousel
const carouselImages = [
  { id: 1, src: '/carousel-1.jpg', alt: 'Modern elevator with wood panel design' },
  { id: 2, src: '/carousel-2.jpg', alt: 'Luxury elevator with decorative glass doors' },
  { id: 3, src: '/carousel-3.jpg', alt: 'Premium elevator with ornate golden interior' },
  { id: 4, src: '/carousel-4.jpg', alt: 'Modern elevator with LED dot matrix walls' },
  { id: 5, src: '/carousel-5.jpg', alt: 'Sleek elevator with minimalist light strip design' },
  { id: 6, src: '/carousel-6.jpg', alt: 'Elegant golden elevator doors with ornate pattern' },
  { id: 7, src: '/carousel-7.jpg', alt: 'Luxury copper-toned elevator interior' },
];

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="hero-carousel-container">
        <div className="hero-carousel-track">
          {/* First set of images */}
          {carouselImages.map((image) => (
            <img
              key={`first-${image.id}`}
              src={image.src}
              alt={image.alt}
              className="hero-carousel-image"
            />
          ))}
          {/* Duplicate set for seamless infinite loop */}
          {carouselImages.map((image) => (
            <img
              key={`second-${image.id}`}
              src={image.src}
              alt={image.alt}
              className="hero-carousel-image"
            />
          ))}
        </div>
        {/* Gradient overlay for text readability */}
        <div className="hero-carousel-overlay" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in stagger-1">
              <span className="text-foreground">Elevating</span>
              <br />
              <span className="gradient-text">Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg animate-fade-in stagger-2">
              {companyInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
              <Link to="/quote">
                <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="px-8 py-6 text-lg rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border-0 text-black dark:text-white hover:bg-white/60 dark:hover:bg-black/60 transition-all"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    const isDark = document.documentElement.classList.contains('dark');
                    const shadowColor = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.45)';
                    e.currentTarget.style.boxShadow = `${x * 0.1}px ${y * 0.1}px 20px ${shadowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4 animate-fade-in stagger-4">
              {[
                'Licensed & Insured',
                '24/7 Support',
                'Free Consultation'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            {/* Trusted Since Badge - spanning full width */}
            <div className="flex justify-center mb-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full text-primary text-base font-bold w-full justify-center border border-black/10 dark:border-white/10">
                <Building2 className="w-4 h-4" />
                <span>Trusted Since {companyInfo.founded}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: `${companyInfo.projectsCompleted}+`, label: 'Projects Completed', delay: '0.1s' },
                { value: `${companyInfo.happyClients}+`, label: 'Happy Clients', delay: '0.2s' },
                { value: `${companyInfo.yearsExperience}+`, label: 'Years Experience', delay: '0.3s' },
                { value: `${companyInfo.teamMembers}+`, label: 'Expert Technicians', delay: '0.4s' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-2xl p-6 text-center card-hover animate-fade-in cursor-pointer"
                  style={{ animationDelay: stat.delay }}
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
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
