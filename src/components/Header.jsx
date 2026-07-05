import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex justify-between items-center">
        {/* Brand Logo */}
        <a 
          href="#inicio"
          className={`text-2xl font-headline font-semibold tracking-wide transition-colors duration-500 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
        >
          SAMALAND TOURS
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          className={`hidden md:flex space-x-10 text-xs font-body font-semibold tracking-[0.15em] uppercase transition-colors duration-500 ${
            scrolled ? 'text-on-surface-variant' : 'text-white/80'
          }`}
        >
          <a href="#inicio" className="hover:text-secondary transition-colors duration-300">Inicio</a>
          <a href="#tours" className="hover:text-secondary transition-colors duration-300">Tours</a>
          <a href="#nosotros" className="hover:text-secondary transition-colors duration-300">Nosotros</a>
          <a href="#testimonios" className="hover:text-secondary transition-colors duration-300">Testimonios</a>
          <a href="#contacto" className="hover:text-secondary transition-colors duration-300">Contacto</a>
        </nav>

        {/* WhatsApp Button / CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded text-xs font-headline font-semibold tracking-[0.1em] uppercase transition-all duration-300 ${
              scrolled 
                ? 'bg-primary text-white shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5' 
                : 'border border-white/40 text-white hover:bg-white/10 hover:border-white'
            }`}
          >
            Chatea ahora
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-500 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl font-bold">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-outline-variant/30 px-6 py-8 space-y-4 flex flex-col text-sm font-body font-semibold tracking-wider shadow-lg animate-fade-in text-neutral">
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 border-b border-outline-variant/10 hover:text-primary transition-colors" 
            href="#inicio"
          >
            Inicio
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 border-b border-outline-variant/10 hover:text-primary transition-colors" 
            href="#tours"
          >
            Tours
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 border-b border-outline-variant/10 hover:text-primary transition-colors" 
            href="#nosotros"
          >
            Nosotros
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 border-b border-outline-variant/10 hover:text-primary transition-colors" 
            href="#testimonios"
          >
            Testimonios
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 border-b border-outline-variant/10 hover:text-primary transition-colors" 
            href="#contacto"
          >
            Contacto
          </a>
          <a 
            href="https://wa.me/573000000000"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded font-headline font-semibold tracking-wider hover:bg-primary/95 transition-all shadow-cta mt-4"
          >
            WhatsApp
            <span className="material-symbols-outlined text-[18px]">chat</span>
          </a>
        </div>
      )}
    </header>
  );
}
