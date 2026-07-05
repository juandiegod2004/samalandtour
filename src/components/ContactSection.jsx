import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tour: 'Cabo San Juan',
    date: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const message = `Hola Samaland Tours, me interesa el tour a *${formData.tour}*.\nMis datos:\n- Nombre: ${formData.name}\n- Teléfono: ${formData.phone}\n- Fecha estimada: ${formData.date}`;
      const encoded = encodeURIComponent(message);
      window.open(`https://wa.me/573000000000?text=${encoded}`, '_blank');
      setSubmitted(false);
    }, 800);
  };

  return (
    <section className="py-24 bg-background border-t border-outline-variant/30" id="contacto">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row gap-16 bg-white rounded-3xl border border-outline-variant/20 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500">
          
          {/* Left Form Column */}
          <div className="md:w-1/2 p-8 md:p-16 space-y-8">
            <div>
              <span className="text-primary text-xs font-body font-semibold tracking-[0.2em] uppercase">
                Reservaciones
              </span>
              <h2 className="text-4xl font-headline font-light text-neutral mt-2">
                Planea tu <span className="text-primary font-semibold">Aventura</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mt-2 font-body font-light">
                Completa tus datos y nos pondremos en contacto contigo para organizar tu itinerario ideal en el Parque Tayrona.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-[10px] text-slate-400 font-headline font-bold uppercase tracking-wider mb-1" htmlFor="name">
                  Nombre Completo
                </label>
                <input 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-outline-variant focus:border-secondary py-3 text-sm font-body outline-none transition-colors duration-300 text-neutral" 
                  id="name" 
                  placeholder="Escribe tu nombre" 
                  type="text"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[10px] text-slate-400 font-headline font-bold uppercase tracking-wider mb-1" htmlFor="phone">
                  Teléfono / WhatsApp
                </label>
                <input 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-outline-variant focus:border-secondary py-3 text-sm font-body outline-none transition-colors duration-300 text-neutral" 
                  id="phone" 
                  placeholder="Ej: +57 300 123 4567" 
                  type="tel"
                />
              </div>

              {/* Tour Dropdown */}
              <div className="flex flex-col">
                <label className="text-[10px] text-slate-400 font-headline font-bold uppercase tracking-wider mb-1" htmlFor="tour">
                  Tour de Interés
                </label>
                <select 
                  value={formData.tour}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-outline-variant focus:border-secondary py-3 text-sm font-body outline-none transition-colors duration-300 text-neutral cursor-pointer" 
                  id="tour"
                >
                  <option value="Cabo San Juan">Cabo San Juan</option>
                  <option value="Playa Cristal">Playa Cristal</option>
                  <option value="Bahía Concha">Bahía Concha</option>
                  <option value="Otro / Por definir">Otro / Por definir</option>
                </select>
              </div>

              {/* Date */}
              <div className="flex flex-col">
                <label className="text-[10px] text-slate-400 font-headline font-bold uppercase tracking-wider mb-1" htmlFor="date">
                  Fecha Estimada de Viaje
                </label>
                <input 
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-outline-variant focus:border-secondary py-3 text-sm font-body outline-none transition-colors duration-300 text-slate-500" 
                  id="date" 
                  type="date"
                />
              </div>

              {/* Submit CTA Button */}
              <button 
                type="submit"
                disabled={submitted}
                className="w-full bg-primary text-white text-xs font-headline font-semibold tracking-[0.15em] uppercase py-4 rounded shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-75 cursor-pointer mt-4 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Redirigiendo a WhatsApp...
                  </>
                ) : (
                  'Enviar Consulta'
                )}
              </button>
            </form>
          </div>
          
          {/* Right Info Column */}
          <div className="md:w-1/2 bg-tertiary/20 p-8 md:p-16 flex flex-col justify-center border-l border-outline-variant/20 space-y-10">
            <div className="space-y-4">
              <span className="text-secondary text-xs font-body font-semibold tracking-[0.2em] uppercase">
                Atención Directa
              </span>
              <h3 className="text-3xl font-headline font-light text-neutral">
                ¿Prefieres asesoría personalizada?
              </h3>
              <p className="text-slate-600 text-sm font-body font-light leading-relaxed">
                Nuestros asesores están disponibles para resolver tus dudas y personalizar tu aventura en tiempo real.
              </p>
              <a 
                href="https://wa.me/573000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded text-base font-headline font-semibold hover:bg-[#128C7E] transition-all duration-300 shadow-whatsapp hover:shadow-whatsapp-hover transform hover:-translate-y-1 w-full max-w-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.028 2c-5.502 0-9.963 4.461-9.963 9.963 0 1.758.455 3.473 1.325 4.981L2 22l5.215-1.368a9.92 9.92 0 004.811 1.237c5.502 0 9.963-4.461 9.963-9.963C21.99 6.46 17.529 2 12.028 2zm0 18.256c-1.56 0-3.092-.418-4.43-1.21l-.317-.189-3.297.865.88-3.21-.207-.33a8.17 8.17 0 01-1.253-4.219c0-4.524 3.68-8.204 8.204-8.204 4.523 0 8.203 3.68 8.203 8.204 0 4.524-3.68 8.203-8.203 8.203zm4.512-6.177c-.247-.124-1.464-.722-1.691-.805-.226-.082-.392-.124-.556.124-.165.248-.64.805-.784.97-.144.165-.289.185-.536.062-.248-.124-1.045-.385-1.99-1.229-.736-.656-1.233-1.466-1.378-1.714-.144-.247-.015-.381.109-.504.111-.112.247-.289.371-.433.124-.144.165-.248.248-.413.082-.165.04-.31-.02-.433-.062-.124-.556-1.341-.763-1.837-.202-.486-.406-.42-.556-.428-.144-.007-.31-.007-.474-.007-.165 0-.433.062-.66.31-.227.247-.866.845-.866 2.062 0 1.216.886 2.392.983 2.524.098.133 1.742 2.66 4.221 3.73.59.254 1.05.405 1.41.519.593.189 1.132.162 1.558.098.475-.072 1.464-.598 1.67-1.176.206-.578.206-1.073.144-1.176-.062-.103-.227-.165-.474-.29z" />
                </svg>
                Chatea con un asesor
              </a>
            </div>
            
            {/* Address Info Block */}
            <div className="border border-outline-variant/30 rounded-xl overflow-hidden p-6 bg-white shadow-sm flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-primary">
                <span className="material-symbols-outlined text-[28px]">map</span>
                <span className="font-headline font-semibold text-sm text-neutral">Oficina Principal Samaland Tours</span>
              </div>
              <p className="text-xs font-body font-light leading-relaxed text-slate-500 pl-10">
                Calle 15 # 3-45, Centro Histórico,<br />
                Santa Marta, Magdalena, Colombia
              </p>
              <a 
                href="https://maps.google.com/?q=Santa+Marta,+Colombia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-body text-primary hover:underline pl-10 block"
              >
                Ver mapa en Google Maps
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
