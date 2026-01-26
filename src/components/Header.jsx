import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';
import { Menu, X, ChevronDown, User, LogIn, Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    // Check for dark mode from localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
    
    // Watch for dark mode changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Full-screen overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-sm border-b border-black/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-14' : 'h-20'}`}>
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 logo-wrapper transition-all duration-500 ease-in-out" 
            style={{ 
              background: 'transparent', 
              backgroundColor: 'transparent',
              transform: isScrolled && !isMobile ? 'translateX(-80px)' : 'translateX(0)'
            }}
          >
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
            <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                opacity: isScrolled ? 0 : 1,
                maxWidth: isScrolled ? 0 : 200,
                transform: isScrolled ? 'translateX(-20px)' : 'translateX(0)'
              }}
            >
              <span className="text-xl font-bold text-foreground whitespace-nowrap">{companyInfo.name}</span>
              <p className="text-xs text-muted-foreground hidden sm:block whitespace-nowrap">Since {companyInfo.founded}</p>
            </div>
          </Link>

          {/* Desktop Navigation - Absolutely centered */}
          <div className={`hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'gap-4' : 'gap-1'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div 
            className="hidden lg:flex items-center gap-3 transition-all duration-500 ease-in-out"
            style={{
              transform: isScrolled ? 'translateX(80px)' : 'translateX(0)'
            }}
          >
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="w-4 h-4" />
                  Portal
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/coming-soon" className="flex items-center gap-2 cursor-pointer">
                    <LogIn className="w-4 h-4" />
                    Customer Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/coming-soon" className="flex items-center gap-2 cursor-pointer">
                    <User className="w-4 h-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/quote">
              <Button className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-secondary transition-colors relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative">
                <span 
                  className={`absolute top-0 left-0 block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    isMenuOpen ? 'rotate-45 top-[9px]' : ''
                  }`}
                />
                <span 
                  className={`absolute top-[9px] left-0 block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0 scale-0' : ''
                  }`}
                />
                <span 
                  className={`absolute bottom-0 left-0 block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                    isMenuOpen ? '-rotate-45 bottom-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in relative z-50">
            <div 
              className="rounded-xl p-4 mt-4 shadow-2xl border border-black/10 dark:border-white/10"
              style={{
                background: isDarkMode 
                  ? 'rgba(0, 0, 0, 0.85)' 
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              }}
            >
              <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <Link to="/coming-soon" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <LogIn className="w-4 h-4" />
                  Customer Portal
                </Button>
              </Link>
              <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full btn-primary bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  Get a Quote
                </Button>
              </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
