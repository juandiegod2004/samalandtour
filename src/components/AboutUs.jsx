import React from 'react';
import teamImg from '../assets/images/team.png';

export default function AboutUs() {
  return (
    <section className="py-24 bg-tertiary/10" id="nosotros">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Text Column */}
          <div className="md:w-1/2 space-y-6">
            <span className="text-primary text-xs font-body font-semibold tracking-[0.2em] uppercase">
              Nuestra Historia
            </span>
            <h2 className="text-4xl font-headline font-light leading-tight text-neutral">
              Operadores Locales con <span className="text-primary font-semibold">Pasión Ecológica</span>
            </h2>
            <p className="text-lg font-body font-light leading-relaxed text-on-surface">
              En Samaland Tours, llevamos más de una década conectando a los viajeros con la magia del Parque Tayrona. Nacimos con la visión de ofrecer experiencias inolvidables, combinando la aventura y el confort.
            </p>
            <p className="text-base font-body font-light leading-relaxed text-on-surface-variant">
              Nuestro compromiso es con la conservación del medio ambiente y el desarrollo de las comunidades locales. Trabajamos de la mano con operadores locales para asegurar que cada visita deje una huella positiva, garantizando prácticas de turismo sostenible y respetuoso con este santuario natural.
            </p>
            <a 
              href="#contacto"
              className="inline-block bg-primary text-white text-xs font-headline font-semibold tracking-[0.15em] uppercase px-10 py-3.5 rounded shadow-cta hover:shadow-cta-hover transform hover:-translate-y-0.5 transition duration-300"
            >
              Conoce al equipo
            </a>
          </div>

          {/* Right Image Column */}
          <div className="md:w-1/2 w-full">
            <div className="relative group overflow-hidden rounded-xl border border-outline-variant/30 shadow-card hover:shadow-card-hover transition-all duration-500 ease-in-out transform hover:-translate-y-1 bg-white p-2">
              <img 
                alt="Happy team of tour guides in Tayrona Park, Santa Marta. Professional and friendly people wearing corporate outdoor gear, tropical jungle background, bright and welcoming." 
                className="w-full h-auto object-cover rounded-lg" 
                src={teamImg}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
