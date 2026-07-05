import React from 'react';

export default function FAQModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const faqs = [
    {
      q: "¿Qué incluye el tour a Cabo San Juan?",
      a: "Nuestros tours estándar incluyen transporte de ida y vuelta en autobús privado climatizado, entradas oficiales al Parque Nacional Tayrona, y un guía profesional certificado durante todo el recorrido."
    },
    {
      q: "¿Cuáles son las políticas de cancelación?",
      a: "Ofrecemos cancelaciones con derecho a reembolso total si se solicitan con un mínimo de 48 horas de anticipación a la fecha programada de tu viaje."
    },
    {
      q: "¿Es obligatoria la vacuna de fiebre amarilla para ingresar al Parque Tayrona?",
      a: "Es altamente recomendada por el Ministerio de Salud para áreas selváticas del Caribe, pero actualmente no es solicitada obligatoriamente para ingresar a los sectores turísticos como Cabo San Juan o Bahía Concha."
    },
    {
      q: "¿Qué tipo de ropa y equipamiento debo llevar?",
      a: "Te aconsejamos vestir ropa ligera y transpirable, tenis de caminata cómodos o calzado cerrado antideslizante, bloqueador solar biodegradable, repelente de insectos y una botella de agua recargable."
    }
  ];

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      {/* Background Dim Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-neutral/60 backdrop-blur-sm transition-opacity duration-300"
      />
      
      {/* Modal Box */}
      <div className="relative bg-white rounded-2xl border border-outline-variant/30 max-w-xl w-full p-8 shadow-ambient animate-fade-in z-10 overflow-y-auto max-h-[85vh]">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4 mb-6">
          <h3 className="text-2xl font-headline font-semibold text-primary">
            Preguntas Frecuentes
          </h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-neutral focus:outline-none cursor-pointer"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content list */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-headline font-semibold text-sm text-neutral flex items-start">
                <span className="text-secondary mr-2 font-bold">Q.</span>
                {faq.q}
              </h4>
              <p className="font-body font-light text-xs text-slate-500 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="border-t border-outline-variant/30 pt-6 mt-8 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-primary text-white text-xs font-headline font-semibold tracking-wider px-6 py-2.5 rounded hover:bg-primary/95 transition duration-300 cursor-pointer shadow-cta"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
