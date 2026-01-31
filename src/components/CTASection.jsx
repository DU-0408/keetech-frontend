import React from 'react';
import { companyInfo } from '../data/mock';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Ready to <span className="text-primary">Elevate</span> Your Building?
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Get a free consultation and quote from our elevator experts. 
          We'll help you find the perfect solution for your needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link to="/quote">
            <Button
              size="lg"
              className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-xl border-2 border-border hover:bg-secondary hover:text-white transition-all w-full sm:w-auto"
              style={{
                textShadow: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <a
            href="tel:1-800-533824"
            className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-medium">+91 98874 00555</span>
          </a>
          <a
            href="mailto:keetchelevator@gmail.com"
            className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-medium">keetchelevator@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
