import React from 'react';

export default function EndorsedLogos() {
  return (
    <section className="bg-surface-container py-12 border-y border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 opacity-75">
        
        {/* Title */}
        <div className="text-lg font-headline text-center md:text-left leading-normal text-slate-500">
          Entidades que avalan y <span className="font-semibold text-neutral">certifican</span><br />
          nuestro <span className="font-semibold text-neutral">servicio turístico</span>
        </div>

        {/* Logo Text/Icons grid */}
        <div className="flex flex-wrap items-center justify-center gap-10 font-headline font-semibold text-sm text-slate-600 tracking-wider">
          <div className="flex items-center space-x-2 border-r border-outline-variant/30 pr-6 last:border-0 last:pr-0">
            <span className="material-symbols-outlined text-primary">forest</span>
            <span>PARQUES NACIONALES</span>
          </div>
          
          <div className="flex items-center space-x-2 border-r border-outline-variant/30 pr-6 last:border-0 last:pr-0">
            <span className="material-symbols-outlined text-primary">verified</span>
            <span>RNT ACTIVO</span>
          </div>

          <div className="flex items-center space-x-2 border-r border-outline-variant/30 pr-6 last:border-0 last:pr-0">
            <span className="material-symbols-outlined text-primary">apartment</span>
            <span>ALCALDÍA SANTA MARTA</span>
          </div>

          <div className="flex items-center space-x-2 last:border-0">
            <span className="material-symbols-outlined text-primary">language</span>
            <span>MARCA PAÍS COLOMBIA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
