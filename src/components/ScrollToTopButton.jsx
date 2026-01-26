import React from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex flex-col items-center pointer-events-none">
      {/* Gradient background - full width, black in both modes */}
      <div className="w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      {/* Arrow - no circular background */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 hover:scale-110 transition-transform pointer-events-auto cursor-pointer"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-10 h-10 text-white" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
