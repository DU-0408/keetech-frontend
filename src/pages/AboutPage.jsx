import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import ScrollToTopButton from '../components/ScrollToTopButton';
import AboutSection from '../components/AboutSection';
import SEO, { seoData } from '../components/SEO';
import { companyInfo } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Award, Users, Building, Calendar } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '2015', title: 'Company Founded', description: 'KEE-Tech Elevators started with a vision to transform vertical transportation.' },
    { year: '2017', title: 'First Major Project', description: 'Completed our first commercial high-rise installation of 8 elevators.' },
    { year: '2019', title: 'Regional Expansion', description: 'Expanded services across multiple states, growing to 30+ team members.' },
    { year: '2021', title: '300th Project', description: 'Celebrated our 300th successful installation with zero safety incidents.' },
    { year: '2023', title: 'Innovation Award', description: 'Recognized for implementing smart elevator technology solutions.' },
    { year: '2025', title: 'Industry Leader', description: 'Now serving 500+ clients with 75+ certified professionals.' },
  ];

  const stats = [
    { icon: Building, value: `${companyInfo.projectsCompleted}+`, label: 'Projects Completed' },
    { icon: Users, value: `${companyInfo.happyClients}+`, label: 'Happy Clients' },
    { icon: Calendar, value: `${companyInfo.yearsExperience}+`, label: 'Years Experience' },
    { icon: Award, value: '0', label: 'Safety Incidents' },
  ];

  return (
    <div className="min-h-screen">
      <SEO {...seoData.about} />
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Trust, <span className="gradient-text">One Floor at a Time</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Since {companyInfo.founded}, KEE-Tech Elevators has been dedicated to providing 
              exceptional elevator solutions with unwavering commitment to safety and quality.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-sm text-center card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* About Section Component */}
        <AboutSection />

        {/* Timeline */}
        <section className="py-20 pb-32 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Company <span className="gradient-text">Milestones</span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 md:left-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
      <LiveChat />
    </div>
  );
};

export default AboutPage;
