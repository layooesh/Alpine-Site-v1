import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-charcoal/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Alpine Visions
        </h1>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-brand-accent transition-colors duration-300">Gallery</button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-brand-accent transition-colors duration-300">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-brand-accent transition-colors duration-300">Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;