import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { services } from '../data/mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Building2, Wrench, RefreshCw, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Building2,
  Wrench,
  RefreshCw,
  MessageSquare,
};

// Service images - keyed by service title
const serviceImages = {
  'Elevator Installation': '/service-maintenance.png',
  'Maintenance & Repairs': '/service-installation.jpg',
  'Modernization': '/service-modernization.jpg',
  'Consultation': '/service-consultation.png',
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Elevator Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From new installations to maintenance and modernization, we provide 
              complete elevator services tailored to your specific needs.
            </p>
          </div>

          {/* Services Detail */}
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/quote">
                      <Button className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className={`${isEven ? '' : 'lg:order-1'}`}>
                    <div className="bg-secondary/50 rounded-3xl p-8 lg:p-12 overflow-hidden">
                      <div className="aspect-square relative rounded-2xl overflow-hidden">
                        {serviceImages[service.title] ? (
                          <img 
                            src={serviceImages[service.title]} 
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
                            <div className="absolute inset-4 bg-primary/10 rounded-2xl" />
                            <div className="absolute inset-8 bg-primary/20 rounded-2xl flex items-center justify-center">
                              <IconComponent className="w-24 h-24 text-primary/50" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-secondary/50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact our team today for a free consultation and quote. 
              We'll help you find the perfect elevator solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/quote">
                <Button size="lg" className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-xl">
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 rounded-xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
      <LiveChat />
    </div>
  );
};

export default ServicesPage;
