import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { id: 'goals', label: 'Architecture' },
    { id: 'overview', label: 'System' },
    { id: 'shoal', label: 'Protocol' },
    { id: 'features', label: 'Integration' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'team', label: 'Research' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 square-corners ${
      isScrolled 
        ? 'glass-elegant border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Architectural Logo */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-accent text-accent-foreground flex items-center justify-center border border-border square-corners">
              <span className="text-sm font-architectural">◉</span>
            </div>
            <span className="font-architectural font-bold text-xl text-gradient-elegant tracking-tight">
              VNIChain
            </span>
          </div>

          {/* Desktop Navigation - Architectural Style */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2 font-technical font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all border-r border-border square-corners ${
                  index === 0 ? 'border-l border-border' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions - Technical Interface */}
          <div className="hidden md:flex items-center gap-0 border border-border square-corners">
            <button className="px-4 py-2 font-technical font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all border-r border-border square-corners">
              Docs
            </button>
            <button className="px-4 py-2 bg-accent text-accent-foreground font-technical font-medium hover:bg-muted transition-all border-r border-border square-corners">
              API
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-all square-corners"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border border-border hover:bg-muted transition-all square-corners"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Architectural Grid */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-elegant border-t border-border square-corners animate-slide-up-elegant">
            <div className="grid grid-cols-1 gap-0">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-4 font-technical font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all text-left border-b border-border square-corners ${
                    index === navItems.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex border-t border-border">
              <button className="flex-1 px-6 py-4 font-technical font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all border-r border-border square-corners">
                Documentation
              </button>
              <button className="flex-1 px-6 py-4 bg-accent text-accent-foreground font-technical font-medium hover:bg-muted transition-all square-corners">
                API Access
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
