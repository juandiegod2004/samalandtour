import React from 'react';

export default function TrustBar() {
  return (
    <section className="bg-surface border-b border-outline-variant/30 py-6">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="flex flex-wrap justify-between items-center gap-6 text-on-surface-variant text-sm font-body font-semibold tracking-wider">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span>Registro Nacional de Turismo Activo</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
            <span>+10 años de experiencia</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            <span>50,000+ viajeros felices</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span>Calificación 4.9/5 en Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
