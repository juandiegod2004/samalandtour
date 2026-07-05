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

function App() {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-body antialiased overflow-x-hidden min-h-screen flex flex-col">
      {/* 1. Loading Preloader */}
      <Preloader />
      
      {/* 2. Scroll-Dynamic Navigation Header */}
      <Header />
      
      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero />
        
        {/* 4. Search Filter Bar */}
        <SearchBar />
        
        {/* 5. Animated Counter Stats */}
        <Stats />
        
        {/* 6. Tours Carousel Slider */}
        <ToursCarousel />
        
        {/* 7. About Us Company History */}
        <AboutUs />
        
        {/* 8. Auto-sliding Testimonials */}
        <TestimonialsCarousel />
        
        {/* 9. Brand Endorsements */}
        <EndorsedLogos />
        
        {/* 10. Underline-Style Contact Form */}
        <ContactSection />
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
