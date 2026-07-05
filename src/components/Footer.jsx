import React from 'react';
import teamImg from '../assets/images/team.png';
import caboImg from '../assets/images/cabo-san-juan.png';

export default function Footer({ onFaqClick }) {
  return (
    <footer className="bg-[#1c1c1f] pt-20 text-slate-300">
      
      {/* Why Choose Us Block */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 bg-white text-slate-800 rounded-3xl p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-500">
        
        {/* Left Decorative Image Column */}
        <div className="relative hidden md:block min-h-[400px]">
          {/* Main background image with rounded left half mask */}
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-l-full"
            style={{ backgroundImage: `url(${caboImg})` }}
          />
          {/* Overlapping smaller circular image */}
          <div className="absolute -bottom-6 -right-6 w-52 h-52 rounded-full border-8 border-white overflow-hidden shadow-card hover:shadow-card-hover transform hover:scale-105 transition-all duration-500 z-10">
            <img 
              alt="Samaland Team" 
              className="w-full h-full object-cover" 
              src={teamImg} 
            />
          </div>
        </div>

        {/* Right Info Column */}
        <div className="space-y-6">
          <h2 className="text-4xl font-headline font-bold text-neutral">
            ¿Por qué <span className="font-light text-slate-400">elegirnos?</span>
          </h2>
          <p className="text-sm text-slate-500 font-body font-light leading-relaxed">
            Somos una agencia de turismo receptivo que ofrece servicios de transfer, excursiones regulares y tours privados de primera clase en toda la región de Santa Marta y el Parque Nacional Tayrona.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-headline font-bold text-neutral">Nuestra historia</h3>
              <p className="text-xs text-slate-500 font-body font-light leading-relaxed">
                Con la meta de ayudar a viajeros de todo el mundo a descubrir la magia del Caribe colombiano, fundamos Samaland Tours. Hoy, con un equipo enfocado en cuidar cada detalle, destacamos por nuestra hospitalidad y excelencia en el servicio al cliente.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-headline font-bold text-neutral">Confianza y ecoturismo</h3>
              <p className="text-xs text-slate-500 font-body font-light leading-relaxed">
                Trabajamos todos los días promoviendo el respeto por la biodiversidad y las comunidades locales, garantizando que cada experiencia sea sostenible, veraz y de alta calidad.
              </p>
            </div>

            <div>
              <h3 className="text-base font-headline font-bold text-neutral">Variedad exclusiva</h3>
              <p className="text-xs text-slate-500 font-body font-light leading-relaxed">
                Contamos con un portafolio diseñado para mezclar naturaleza, senderismo de aventura y descanso en las playas más hermosas, adaptando cada recorrido a las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Actual Footer Area */}
      <div className="bg-neutral pt-16 pb-8 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-headline font-bold text-white tracking-tighter">
              SAMALAND<br />
              <span className="text-xs text-slate-500 font-body font-light tracking-[0.2em] uppercase">Tours & Turismo</span>
            </div>
            <p className="text-xs text-slate-400 font-body font-light pr-6 leading-relaxed">
              Una agencia de viajes líder comprometida con la excelencia y el ecoturismo en el Caribe colombiano.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a href="mailto:reservas@samalandtours.com" className="text-slate-400 hover:text-secondary transition-colors duration-300">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-headline font-semibold text-sm mb-4 tracking-wider uppercase">Compañía</h4>
            <ul className="space-y-2 text-xs font-body font-light text-slate-400">
              <li><a href="#nosotros" className="hover:text-secondary transition-colors">Sobre nosotros</a></li>
              <li><a href="#tours" className="hover:text-secondary transition-colors">Nuestros tours</a></li>
              <li><a onClick={onFaqClick} className="hover:text-secondary transition-colors cursor-pointer">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-headline font-semibold text-sm mb-4 tracking-wider uppercase">Explorar</h4>
            <ul className="space-y-2 text-xs font-body font-light text-slate-400">
              <li><a href="#inicio" className="hover:text-secondary transition-colors">Inicio</a></li>
              <li><a href="#testimonios" className="hover:text-secondary transition-colors">Opiniones</a></li>
              <li><a onClick={onFaqClick} className="hover:text-secondary transition-colors cursor-pointer font-semibold text-slate-300">FAQ Modal</a></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-white font-headline font-semibold text-sm mb-4 tracking-wider uppercase">Contacto</h4>
            <div className="space-y-4 text-xs font-body font-light text-slate-400">
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-slate-500 text-[18px]">phone</span>
                <div>
                  <div className="font-semibold text-slate-300">Teléfono</div>
                  <div>+57 300 123 4567</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-slate-500 text-[18px]">mail</span>
                <div>
                  <div className="font-semibold text-slate-300">E-mail</div>
                  <div>reservas@samalandtours.com</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-body font-light">
          <div>Copyright © 2026 Samaland Tours. Todos los derechos reservados. RNT Activo.</div>
          <div className="space-x-4 mt-4 md:mt-0">
            <a onClick={onFaqClick} className="hover:text-slate-300 cursor-pointer">Política de Privacidad</a>
            <a onClick={onFaqClick} className="hover:text-slate-300 cursor-pointer">Términos & Condiciones</a>
          </div>
        </div>

      </div>

    </footer>
  );
}
