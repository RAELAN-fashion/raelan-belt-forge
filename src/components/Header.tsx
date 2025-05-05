import React, { useState, useEffect } from 'react';
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-raelan-bg/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/lovable-uploads/d18289fb-da89-4ae7-ad58-bd2fae118e07.png" alt="RAELAN Logo" className="h-10 md:h-12 object-fill" />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link">Home</a>
          <a href="#legacy" className="nav-link">Legacy</a>
          <a href="#collections" className="nav-link">Collections</a>
          <a href="#" className="nav-link">Guilds</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-raelan-offwhite hover:text-raelan-gold" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-raelan-bg/95 z-40 flex flex-col items-center justify-center">
          <button className="absolute top-6 right-6 text-raelan-offwhite hover:text-raelan-gold" onClick={toggleMobileMenu} aria-label="Close mobile menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-8">
            <a href="#" className="nav-link text-xl" onClick={toggleMobileMenu}>Home</a>
            <a href="#legacy" className="nav-link text-xl" onClick={toggleMobileMenu}>Legacy</a>
            <a href="#collections" className="nav-link text-xl" onClick={toggleMobileMenu}>Collections</a>
            <a href="#" className="nav-link text-xl" onClick={toggleMobileMenu}>Guilds</a>
            <a href="#" className="nav-link text-xl" onClick={toggleMobileMenu}>Contact</a>
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;