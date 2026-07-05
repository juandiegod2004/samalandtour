import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fade-out animation after 1.2 seconds
    const fadeTimeout = setTimeout(() => {
      setFade(true);
    }, 1200);

    // Completely unmount after animation (0.6s duration)
    const removeTimeout = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral text-white transition-all duration-600 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Animated Brand Logo Icon */}
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-2 border-secondary/40 animate-pulse">
          <span className="material-symbols-outlined text-[48px] text-secondary">
            explore
          </span>
          {/* Circular outline effect */}
          <div className="absolute inset-0 rounded-full border border-secondary animate-ping opacity-25" />
        </div>
        
        {/* Brand Name */}
        <h2 className="text-3xl font-headline font-light tracking-[0.2em] text-white">
          SAMALAND
        </h2>
        <span className="text-xs font-body font-semibold tracking-[0.3em] text-secondary uppercase">
          Tours & Experiences
        </span>
      </div>
    </div>
  );
}
