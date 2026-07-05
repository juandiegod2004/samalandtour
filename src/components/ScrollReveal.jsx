import React, { useEffect, useState, useRef } from 'react';

export default function ScrollReveal({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Run only once
        }
      },
      {
        threshold: 0.25 // Triggers at 25% visibility
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[600ms] ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </div>
  );
}
