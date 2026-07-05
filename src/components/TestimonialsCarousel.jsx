import React, { useEffect, useState } from 'react';

export default function TestimonialsCarousel() {
  const reviews = [
    {
      name: "Carlos R.",
      date: "2025-03-05",
      rating: 5,
      text: "Una experiencia increíble en Cabo San Juan. La organización fue perfecta desde que nos recogieron hasta el final del día. Los guías muy amables y conocedores."
    },
    {
      name: "Ana M.",
      date: "2025-02-19",
      rating: 5,
      text: "El tour a Playa Cristal superó mis expectativas. El almuerzo estuvo delicioso y el equipo nos hizo sentir seguros y cómodos en todo momento. 100% recomendado."
    },
    {
      name: "John D.",
      date: "2025-01-24",
      rating: 5,
      text: "Bahía Concha es un paraíso. Agradezco a la agencia por su profesionalismo y por promover un turismo tan responsable con el parque."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-20 bg-background border-t border-outline-variant/30" id="testimonios">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-4xl font-headline font-light leading-tight md:w-1/2">
            Recomendado por <span className="text-slate-500 font-normal">Viajeros</span><br />
            de todo el mundo en <span className="text-secondary font-semibold">Samaland</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed md:w-5/12 mt-6 md:mt-0 font-body font-light">
            Trabajamos cada día con el mismo compromiso del primer día, transmitiendo respeto por el turismo sostenible y brindando la máxima seguridad y hospitalidad en el Caribe colombiano.
          </p>
        </div>

        {/* Testimonials Auto-sliding Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-outline-variant/20 shadow-card hover:shadow-card-hover transition-all duration-500 relative min-h-[220px] flex flex-col justify-between">
            {/* Active Review Box */}
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm font-headline">
                  {reviews[activeIndex].name[0]}
                </div>
                <div>
                  <div className="font-headline font-semibold text-sm text-neutral">{reviews[activeIndex].name}</div>
                  <div className="text-[10px] text-slate-400 font-body">{reviews[activeIndex].date}</div>
                </div>
              </div>
              
              <div className="flex text-yellow-400 text-sm">
                {"★".repeat(reviews[activeIndex].rating)}
              </div>
              
              <p className="text-sm font-body font-light text-slate-600 italic leading-relaxed">
                "{reviews[activeIndex].text}"
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'bg-primary w-6' : 'bg-outline-variant/50 hover:bg-outline-variant'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Global Evaluation Badges */}
        <div className="flex justify-center mt-12 space-x-12">
          {/* Google */}
          <div className="text-center">
            <div className="text-[10px] font-headline font-bold tracking-[0.2em] text-neutral mb-1">EXCELENTE</div>
            <div className="text-yellow-400 text-xs mb-1">★★★★★</div>
            <div className="text-[11px] text-slate-500 font-body mb-2">Basado en <span className="font-semibold text-neutral">112 opiniones</span></div>
            <img 
              alt="Google" 
              className="h-5 mx-auto opacity-75" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCny9ET9A04BIt11X0dBr4PsGbwbymLVyc3CRlxRWjFRUSrQVa5y-E5M-oknKa_ORFQl7_LCR3gkTLAGjmKD2H0BPeD7r6fQyfoSwB5KaJ23bHGX9KLLTfLxDrg5iVO2DdF7eZnP5EHNoICFrd7l0-SsQLVPl0YnuIpQwImb9MLFWt-j--jkZPw6gFSMGJp7e53JBjbPZV9EKz0yKcToeWj3Tzoqsfr6GbYc_-KWmsABrUziEtL8y_sXCfqpG9p2gK7OCHgXuXIuEg" 
            />
          </div>
          {/* TripAdvisor */}
          <div className="text-center">
            <div className="text-[10px] font-headline font-bold tracking-[0.2em] text-neutral mb-1">EXCELENTE</div>
            <div className="text-secondary text-xs mb-1">★★★★★</div>
            <div className="text-[11px] text-slate-500 font-body mb-2">Basado en <span className="font-semibold text-neutral">161 opiniones</span></div>
            <img 
              alt="TripAdvisor" 
              className="h-5 mx-auto opacity-75" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEyujGXnK5JeujmblsR3NbglqIfUL93cnQZGpvm-A1mNMkIWPedkvHaaOx7emMWdHabvzdy5j0mybaeKxvTGLNiFdC7JbgmFDeFml9elH0zCMFGJyCEj9mpotrzgXdz8qsfbX49hqFHyIRka5MEYSKSv_fBck25v0bNjqK0uguOQJ2xlbfwrCTPozNBfi3HsDMgiuvdzHNRhNVz2ymlBguRthbvkADS-Pr1ENLuCbBmM48VDJbmxtNhvLLA7vlTED30V8HSqSWNQs" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
