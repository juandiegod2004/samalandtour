import React, { useState } from 'react';

export default function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md dark:bg-surface-dim/90 shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-4 md:px-16 h-20 max-w-[1280px] mx-auto">
        <div className="text-2xl font-headline font-bold text-primary dark:text-primary-fixed">
          Samaland Tours
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-body font-semibold tracking-wider">
          <a className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 hover:opacity-80 transition-opacity" href="#inicio">Inicio</a>
          <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="#tours">Tours</a>
          <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="#nosotros">Nosotros</a>
          <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="#testimonios">Testimonios</a>
          <a className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80" href="#contacto">Contacto</a>
        </div>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/573000000000" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:flex items-center gap-3 bg-primary text-on-primary px-8 py-3 rounded-lg text-sm font-body font-semibold tracking-wider hover:bg-primary-container transition-all duration-300 shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 cursor-pointer"
        >
          WhatsApp
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl font-bold">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface dark:bg-surface-dim border-t border-outline-variant/30 px-4 py-6 space-y-3 flex flex-col text-sm font-body font-semibold tracking-wider animate-fade-in shadow-lg">
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-primary dark:text-primary-fixed py-2 border-b border-outline-variant/10" 
            href="#inicio"
          >
            Inicio
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-on-surface-variant dark:text-outline-variant hover:text-primary py-2 border-b border-outline-variant/10" 
            href="#tours"
          >
            Tours
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-on-surface-variant dark:text-outline-variant hover:text-primary py-2 border-b border-outline-variant/10" 
            href="#nosotros"
          >
            Nosotros
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-on-surface-variant dark:text-outline-variant hover:text-primary py-2 border-b border-outline-variant/10" 
            href="#testimonios"
          >
            Testimonios
          </a>
          <a 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-on-surface-variant dark:text-outline-variant hover:text-primary py-2 border-b border-outline-variant/10" 
            href="#contacto"
          >
            Contacto
          </a>
          <a 
            href="https://wa.me/573000000000"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-primary text-on-primary py-3 rounded-lg hover:bg-primary-container transition-all duration-300 shadow-cta hover:shadow-cta-hover mt-4"
          >
            WhatsApp
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          </a>
        </div>
      )}
    </nav>
  );
}
