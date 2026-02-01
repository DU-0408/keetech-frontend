import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ProjectsSection from '../components/ProjectsSection';
import SEO, { seoData } from '../components/SEO';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <SEO {...seoData.projects} />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ProjectsSection limit={100} noPadding />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
      <LiveChat />
    </div>
  );
};

export default ProjectsPage;
