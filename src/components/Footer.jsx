import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/mock';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail,
  ArrowUp
} from 'lucide-react';

const Footer = ({ extraMobilePadding = false }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Elevator Installation', path: '/services#installation' },
      { name: 'Maintenance & Repairs', path: '/services#maintenance' },
      { name: 'Modernization', path: '/services#modernization' },
      { name: 'Consultation', path: '/services#consultation' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Get a Quote', path: '/quote' },
      { name: 'Customer Portal', path: '/portal' },
      { name: 'FAQs', path: '/faq' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/ElevatorJaipur/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/elevatorkeetch?s=21', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rajnish-k-upadhyay-77774b151/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/keetechelevator/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-background text-foreground relative border-t border-border">

      <div className={`max-w-7xl mx-auto px-6 lg:px-8 py-16 md:pb-16 ${extraMobilePadding ? 'pb-60' : 'pb-28'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 logo-wrapper" style={{ background: 'transparent', backgroundColor: 'transparent' }}>
              <div className="logo-container" style={{ background: 'transparent', display: 'inline-block' }}>
                <img 
                  src="/Logo.png" 
                  alt="KEE-Tech Elevators Logo" 
                  className="h-10 w-auto object-contain logo-image"
                  style={{ 
                    background: 'transparent', 
                    backgroundColor: 'transparent',
                    display: 'block'
                  }}
                />
              </div>
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              {companyInfo.description}
            </p>
            <div className="space-y-3">
              <a href="tel:1-800-533824" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98874 00555</span>
              </a>
              <a href="mailto:keetchelevator@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>keetchelevator@gmail.com</span>
              </a>
              <a 
                href="https://www.google.com/maps?q=26.911477434723604,75.69891063111433" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Plot No-1770-1771 Sukhijha Vihar Kanak Vrindavan Maharana Pratap Road Jaipur Rajasthan 302015</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
