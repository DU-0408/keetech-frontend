import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'KEE-Tech Elevators',
  description = "KEE-Tech Elevators - Jaipur's trusted elevator company with 10+ years experience. Expert elevator installation, maintenance, modernization & 24/7 repair services for commercial & residential buildings in Rajasthan.",
  keywords = 'elevator installation Jaipur, lift maintenance Rajasthan, elevator repair services, KEE-Tech Elevators',
  canonicalUrl = 'https://keetchelevators.com',
  ogType = 'website',
  ogImage = 'https://keetchelevators.com/Logo.png',
  structuredData = null,
  noIndex = false,
}) => {
  const fullTitle = title.includes('KEE-Tech') ? title : `${title} | KEE-Tech Elevators`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="KEE-Tech Elevators" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Pre-configured SEO data for each page
export const seoData = {
  home: {
    title: 'KEE-Tech Elevators | Premium Elevator Installation & Maintenance in Jaipur',
    description: "Jaipur's most trusted elevator company with 10+ years of excellence. We provide premium elevator installation, maintenance, modernization & 24/7 repair services for commercial & residential buildings across Rajasthan. 500+ successful projects completed.",
    keywords: 'elevator installation Jaipur, lift maintenance Rajasthan, elevator company Jaipur, best elevator service provider, commercial elevator installation, residential lift services, elevator modernization India, KEE-Tech Elevators',
    canonicalUrl: 'https://keetchelevators.com/',
  },
  services: {
    title: 'Elevator Services - Installation, Maintenance & Modernization | KEE-Tech',
    description: 'Comprehensive elevator services including new installations, 24/7 maintenance & repairs, modernization upgrades, and expert consultation. Certified technicians, safety compliance, and warranty included on all services.',
    keywords: 'elevator installation service, lift maintenance company, elevator repair service Jaipur, elevator modernization, lift upgrade service, commercial elevator installation, residential elevator service, 24/7 elevator repair',
    canonicalUrl: 'https://keetchelevators.com/services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Elevator Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "KEE-Tech Elevators",
        "telephone": "+91-98874-00555"
      },
      "areaServed": {
        "@type": "State",
        "name": "Rajasthan"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Elevator Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Elevator Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Elevator Maintenance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Elevator Modernization"
            }
          }
        ]
      }
    }
  },
  projects: {
    title: 'Our Projects - 500+ Successful Elevator Installations | KEE-Tech',
    description: 'Explore our portfolio of 500+ successful elevator installations across Jaipur and Rajasthan. Commercial buildings, hospitals, hotels, residential complexes - see our quality work in action.',
    keywords: 'elevator projects Jaipur, completed elevator installations, commercial elevator projects, hospital elevator installation, hotel lift installation, residential elevator portfolio',
    canonicalUrl: 'https://keetchelevators.com/projects',
  },
  about: {
    title: 'About KEE-Tech Elevators - 10+ Years of Excellence',
    description: 'Since 2015, KEE-Tech Elevators has been Jaipur\'s trusted partner for elevator solutions. With 75+ certified professionals, 500+ completed projects, and zero safety incidents, we\'re committed to elevating excellence.',
    keywords: 'about KEE-Tech Elevators, elevator company history, trusted elevator service Jaipur, elevator experts Rajasthan, certified elevator technicians',
    canonicalUrl: 'https://keetchelevators.com/about',
  },
  contact: {
    title: 'Contact KEE-Tech Elevators - Get in Touch Today',
    description: 'Contact KEE-Tech Elevators for all your elevator needs. Call +91 98874 00555 or visit us at Jaipur, Rajasthan. We offer free consultations and quick response times. 24/7 emergency service available.',
    keywords: 'contact KEE-Tech Elevators, elevator company phone number, elevator service Jaipur contact, lift installation enquiry, elevator maintenance request',
    canonicalUrl: 'https://keetchelevators.com/contact',
  },
  quote: {
    title: 'Get a Free Elevator Quote - KEE-Tech Elevators',
    description: 'Request a free, no-obligation quote for elevator installation, maintenance, or modernization. Our experts will provide a customized proposal within 24 hours. Contact us today!',
    keywords: 'elevator quote, free elevator consultation, elevator installation cost, lift maintenance price, elevator modernization quote, elevator service estimate',
    canonicalUrl: 'https://keetchelevators.com/quote',
  },
};

export default SEO;
