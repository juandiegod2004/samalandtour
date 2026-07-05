import React, { useEffect, useState, useRef } from 'react';

function Counter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        setStarted(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    
    // Extract number from string target (e.g. "50000" from "50.000+")
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10);
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = Math.floor(progress * numericTarget);
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(numericTarget);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [started, target, duration]);

  const formatDisplay = (num) => {
    if (target === "4.9") {
      // Re-insert decimal for rating (e.g. 4.9 from 49)
      const decimalStr = (num / 10).toFixed(1);
      return `${decimalStr}/5`;
    }
    // Format large numbers with thousands separator
    return num.toLocaleString('es-ES') + (target.includes('+') ? '+' : '');
  };

  return <span ref={ref} className="font-bold text-neutral">{formatDisplay(count)}</span>;
}

export default function Stats() {
  return (
    <section className="bg-white py-16 border-y border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
        
        {/* Metric 1 Description */}
        <div className="flex flex-col justify-center pb-6 md:pb-0">
          <h3 className="text-2xl font-headline font-light text-slate-500 leading-tight">
            Nuestros <span className="text-primary font-semibold">Números</span><br />Hablan por sí mismos
          </h3>
        </div>

        {/* Metric 2 */}
        <div className="pt-6 md:pt-0 md:px-8 text-center md:text-left flex flex-col justify-center">
          <div className="text-4xl md:text-5xl font-headline text-neutral mb-2">
            <Counter target="1.500+" />
          </div>
          <div className="text-xs font-body font-semibold tracking-wider text-slate-500 uppercase">Tours Completados</div>
        </div>

        {/* Metric 3 */}
        <div className="pt-6 md:pt-0 md:px-8 text-center md:text-left flex flex-col justify-center">
          <div className="text-4xl md:text-5xl font-headline text-neutral mb-2">
            <Counter target="50.000+" />
          </div>
          <div className="text-xs font-body font-semibold tracking-wider text-slate-500 uppercase">Viajeros Satisfechos</div>
        </div>

        {/* Metric 4 */}
        <div className="pt-6 md:pt-0 md:px-8 text-center md:text-left flex flex-col justify-center">
          <div className="text-4xl md:text-5xl font-headline text-neutral mb-2">
            <Counter target="4.9" /> {/* 4.9 will be rendered as 4.9/5 using decimal conversion */}
          </div>
          <div className="text-xs font-body font-semibold tracking-wider text-slate-500 uppercase">Calificación en Google</div>
        </div>

      </div>
    </section>
  );
}
