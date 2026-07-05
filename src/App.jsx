import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Stats from './components/Stats';
import ToursCarousel from './components/ToursCarousel';
import AboutUs from './components/AboutUs';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import EndorsedLogos from './components/EndorsedLogos';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FAQModal from './components/FAQModal';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-body antialiased overflow-x-hidden min-h-screen flex flex-col">
      {/* 1. Loading Preloader */}
      <Preloader />
      
      {/* 2. Scroll-Dynamic Navigation Header */}
      <Header />
      
      <main className="flex-grow">
        {/* 3. Hero Section (visible immediately, uses onload animation) */}
        <Hero />
        
        {/* 4. Search Filter Bar (wrapped in ScrollReveal) */}
        <ScrollReveal>
          <SearchBar />
        </ScrollReveal>
        
        {/* 5. Animated Counter Stats */}
        <ScrollReveal>
          <Stats />
        </ScrollReveal>
        
        {/* 6. Tours Carousel Slider */}
        <ScrollReveal>
          <ToursCarousel />
        </ScrollReveal>
        
        {/* 7. About Us Company History */}
        <ScrollReveal>
          <AboutUs />
        </ScrollReveal>
        
        {/* 8. Auto-sliding Testimonials */}
        <ScrollReveal>
          <TestimonialsCarousel />
        </ScrollReveal>
        
        {/* 9. Brand Endorsements */}
        <ScrollReveal>
          <EndorsedLogos />
        </ScrollReveal>
        
        {/* 10. Underline-Style Contact Form */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      
      {/* 11. Redesigned Footer (handles modal click) */}
      <Footer onFaqClick={() => setFaqOpen(true)} />
      
      {/* 12. FAQ Popup Modal */}
      <FAQModal isOpen={faqOpen} onClose={() => setFaqOpen(false)} />
      
      {/* 13. Persistent Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
