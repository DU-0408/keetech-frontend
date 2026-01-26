import React from 'react';
import { companyInfo } from '../data/mock';
import { Target, Eye, Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every installation and service meets the highest safety standards.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Premium components and expert craftsmanship in every project.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: '24/7 support and prompt response for all maintenance needs.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Tailored solutions that exceed client expectations.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              About KEE-Tech Elevators
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Decade of <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded in {companyInfo.founded}, KEE-Tech Elevators has grown from a small local 
              service provider to a leading name in vertical transportation solutions. Our 
              commitment to safety, innovation, and customer satisfaction drives everything we do.
            </p>
            <p className="text-muted-foreground mb-8">
              With over {companyInfo.projectsCompleted} successful projects and a team of {companyInfo.teamMembers}+ certified professionals, we bring expertise and 
              reliability to every elevator installation, modernization, and maintenance service.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary/50 rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To provide safe, reliable, and innovative elevator solutions that enhance 
                  building accessibility and user experience.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm">
                  To be the most trusted elevator company, known for excellence, 
                  innovation, and exceptional customer care.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-2xl card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
