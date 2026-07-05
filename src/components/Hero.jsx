import React, { useState, useEffect } from 'react';
import heroBg from '../assets/images/cabo-san-juan.png';
import tayronaVideo from '../assets/videos/video-tayrona.mp4';
import tayronaMobileVideo from '../assets/videos/tayrona-mobile.MOV';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset video ready state when video source changes
  const videoSource = isMobile ? tayronaMobileVideo : tayronaVideo;
  useEffect(() => {
    setVideoReady(false);
  }, [videoSource]);

  const tags = [
    "Aventura", "Parque Tayrona", "Bahía Concha", "Playa Cristal", 
    "Cabo San Juan", "Ecoturismo", "Camping de Lujo", "Transfers Privados"
  ];

  return (
    <section className="relative min-h-screen md:h-screen flex items-center pt-28 md:pt-20 pb-16 md:pb-0 overflow-hidden" id="inicio">
      
      {/* Background Image / Video Fallback (Always visible behind video) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Full HD Background Video / Mobile Video */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <video 
          key={videoSource}
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          onPlay={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-45' : 'opacity-0'
          }`}
        >
          <source src={videoSource} />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral via-neutral/85 to-transparent z-20" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-30 w-full flex flex-col md:flex-row justify-between items-center gap-12 pt-8 md:pt-0">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-white">
          <span className="inline-block border border-secondary/40 text-secondary text-xs font-body font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-secondary/5">
            Naturaleza Pura & Exclusividad
          </span>
          <h1 
            className={`text-4xl md:text-6xl font-headline font-light leading-tight tracking-tight transition-all duration-[1500ms] ease-out ${
              isLoaded 
                ? 'opacity-100 blur-0 translate-y-0' 
                : 'opacity-0 blur-[10px] translate-y-4'
            }`}
          >
            Vive el Parque <span className="text-secondary font-semibold">Tayrona</span><br/>con Nosotros
          </h1>
          <p className="text-base md:text-lg font-body font-light text-slate-300 leading-relaxed max-w-lg">
            Disfruta de tours exclusivos, acampada de lujo (glamping) y transporte privado al corazón del Caribe colombiano.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#tours" 
              className="bg-secondary text-neutral font-headline font-semibold text-xs tracking-wider px-8 py-3.5 rounded hover:bg-yellow-500 transition duration-300 flex items-center space-x-2 shadow-ambient-gold hover:-translate-y-0.5"
            >
              <span>Ver Tours Disponibles</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* Tags Pills List */}
          <div className="flex flex-wrap gap-2 pt-4 md:pt-6">
            {tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-slate-300 hover:border-secondary hover:text-white cursor-pointer transition duration-300 bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side Luxury Content Card */}
        <div className="w-full md:w-5/12 bg-black/60 p-8 rounded-2xl backdrop-blur-md border border-white/10 text-white shadow-ambient">
          <h2 className="text-2xl font-headline font-semibold mb-4 text-white">
            Experiencias Únicas en <span className="text-secondary">Santa Marta</span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-body font-light">
            Samaland Tours nació con la visión de conectar a los viajeros con la majestuosidad ecológica de la Sierra Nevada y el Caribe. Hoy, con un equipo profesional enfocado en el turismo sostenible y el confort, garantizamos una experiencia de viaje inigualable, segura y respetuosa con el medio ambiente.
          </p>
          <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-neutral bg-primary flex items-center justify-center text-xs font-bold font-headline text-white">S</div>
              <div className="w-10 h-10 rounded-full border-2 border-neutral bg-secondary flex items-center justify-center text-xs font-bold font-headline text-neutral">T</div>
              <div className="w-10 h-10 rounded-full border-2 border-neutral bg-slate-600 flex items-center justify-center text-xs font-bold font-headline text-white">M</div>
            </div>
            <div>
              <div className="font-headline font-bold text-sm text-white">+50,000</div>
              <div className="text-xs text-slate-400 font-body">Viajeros Felices</div>
              <a className="text-xs text-secondary hover:underline font-body" href="#testimonios">Ver Reseñas de Google</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
