import React from 'react';
import caboSanJuanImg from '../assets/images/cabo-san-juan.png';
import playaCristalImg from '../assets/images/playa-cristal.png';
import bahiaConchaImg from '../assets/images/bahia-concha.png';

export default function ToursSection() {
  const tours = [
    {
      title: "Cabo San Juan",
      price: "$150.000",
      image: caboSanJuanImg,
      alt: "Cabo San Juan del Guia, Tayrona Park, Santa Marta, Colombia. Tropical beach with iconic palm trees and large rocks, turquoise water, sunny day, professional travel photography.",
      features: ["Transporte", "Guía Turístico", "Almuerzo"],
      icons: ["directions_bus", "person_search", "restaurant"]
    },
    {
      title: "Playa Cristal",
      price: "$180.000",
      image: playaCristalImg,
      alt: "Playa Cristal, Tayrona Park, Santa Marta, Colombia. Crystal clear turquoise water, white sand, lush green mountains in the background, professional travel photography.",
      features: ["Transporte", "Guía Turístico", "Almuerzo"],
      icons: ["directions_bus", "person_search", "restaurant"]
    },
    {
      title: "Bahía Concha",
      price: "$120.000",
      image: bahiaConchaImg,
      alt: "Bahia Concha, Santa Marta, Colombia. Peaceful bay with calm blue water, surrounded by green mountains, professional landscape photography.",
      features: ["Transporte", "Guía Turístico", "Almuerzo"],
      icons: ["directions_bus", "person_search", "restaurant"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="tours">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-headline font-semibold leading-[40px] text-primary mb-3">Nuestros Tours</h2>
          <p className="text-base font-body font-normal leading-normal text-on-surface-variant max-w-2xl mx-auto">
            Explora las maravillas del Parque Tayrona con nuestras opciones exclusivas diseñadas para tu comodidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour, idx) => (
            <div 
              key={idx} 
              className="bg-surface rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col group shadow-card hover:shadow-card-hover transform hover:-translate-y-[6px] transition-all duration-300 ease-in-out"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt={tour.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={tour.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-headline font-semibold leading-8 text-on-surface mb-1 group-hover:text-primary transition-colors">{tour.title}</h3>
                <p className="text-sm font-body font-semibold tracking-wider text-primary mb-6">{tour.price}</p>
                <div className="flex gap-3 mb-6 text-on-surface-variant">
                  {tour.icons.map((icon, iconIdx) => (
                    <span 
                      key={iconIdx}
                      className="material-symbols-outlined text-[20px] bg-surface-container-low p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300" 
                      title={tour.features[iconIdx]}
                    >
                      {icon}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a 
                    href="#contacto" 
                    className="block text-center w-full bg-surface-container text-primary text-sm font-body font-semibold tracking-wider py-3 rounded-lg hover:bg-primary hover:text-on-primary hover:shadow-md transition-all duration-300"
                  >
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
