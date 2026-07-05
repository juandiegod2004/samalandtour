import React, { useRef, useState } from 'react';
import caboSanJuanImg from '../assets/images/cabo-san-juan.png';
import playaCristalImg from '../assets/images/playa-cristal.png';
import bahiaConchaImg from '../assets/images/bahia-concha.png';

export default function ToursCarousel() {
  const carouselRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Todos');

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild.clientWidth + 24; // width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const tours = [
    {
      title: "Cabo San Juan",
      location: "Parque Tayrona, Santa Marta",
      category: "Desde Tayrona",
      priceAdult: "$150.000",
      priceChild: "$100.000",
      image: caboSanJuanImg,
      alt: "Cabo San Juan",
      stars: "★★★★★",
      description: "Disfruta de la playa más emblemática, rodeada de palmeras gigantes y arrecifes de coral."
    },
    {
      title: "Playa Cristal",
      location: "Parque Tayrona, Santa Marta",
      category: "Desde Tayrona",
      priceAdult: "$180.000",
      priceChild: "$120.000",
      image: playaCristalImg,
      alt: "Playa Cristal",
      stars: "★★★★★",
      description: "Aguas cristalinas de color turquesa perfectas para snorkel y arenas blancas en un entorno virgen."
    },
    {
      title: "Bahía Concha",
      location: "Santa Marta, Colombia",
      category: "Desde Santa Marta",
      priceAdult: "$120.000",
      priceChild: "$80.000",
      image: bahiaConchaImg,
      alt: "Bahía Concha",
      stars: "★★★★★",
      description: "Una bahía pacífica de aguas calmas y transparentes, ideal para relajación total en familia."
    }
  ];

  // Filter tours based on selected tab
  const filteredTours = activeTab === 'Todos' 
    ? tours 
    : tours.filter(tour => tour.category === activeTab);

  const tabs = ['Todos', 'Desde Tayrona', 'Desde Santa Marta'];

  return (
    <section className="py-20 bg-background" id="tours">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div className="space-y-4">
            <span className="text-secondary text-xs font-body font-semibold tracking-[0.2em] uppercase">
              Nuestras Experiencias
            </span>
            <h2 className="text-4xl font-headline font-light leading-tight">
              Los Mejores <span className="text-primary font-semibold">Tours</span><br />Para Hacer en el Parque Tayrona
            </h2>
          </div>
          
          {/* Slider Arrow Controls */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-outline-variant hover:bg-neutral hover:text-white transition duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Anterior"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-outline-variant hover:bg-neutral hover:text-white transition duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Siguiente"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center space-x-8 border-b border-outline-variant/30 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border-b-2 font-headline font-medium text-sm transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'border-secondary text-secondary font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel Slider Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory min-h-[500px]"
        >
          {filteredTours.map((tour, idx) => (
            <div 
              key={tour.title}
              className="min-w-[100%] sm:min-w-[450px] md:min-w-[380px] lg:min-w-[400px] h-[480px] relative rounded-2xl overflow-hidden group shadow-card hover:shadow-card-hover transform hover:-translate-y-[8px] transition-all duration-500 ease-in-out snap-start border border-outline-variant/20 animate-fade-in"
            >
              {/* Zoomable Image */}
              <img 
                alt={tour.alt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={tour.image}
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-300" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-xs text-secondary font-headline font-semibold uppercase tracking-wider mb-2">
                  {tour.location}
                </span>
                <h3 className="text-2xl font-headline font-bold mb-3">{tour.title}</h3>
                <p className="text-xs text-slate-300 font-body mb-4 leading-relaxed font-light line-clamp-2">
                  {tour.description}
                </p>
                
                {/* Rating stars */}
                <div className="flex text-yellow-400 text-sm mb-4">
                  {tour.stars}
                </div>

                {/* Price Boxes */}
                <div className="grid grid-cols-2 gap-2 mb-6 text-center text-xs">
                  <div className="bg-black/50 backdrop-blur-sm rounded p-2 border border-white/10">
                    <div className="font-bold text-secondary">{tour.priceAdult}</div>
                    <div className="text-[10px] text-slate-400">Adultos</div>
                  </div>
                  <div className="bg-black/50 backdrop-blur-sm rounded p-2 border border-white/10">
                    <div className="font-bold text-white">{tour.priceChild}</div>
                    <div className="text-[10px] text-slate-400">Niños (5-10 años)</div>
                  </div>
                </div>

                {/* CTA Button Inside Card */}
                <a 
                  href="#contacto"
                  className="w-full bg-white text-neutral font-headline font-semibold text-xs tracking-wider py-3 rounded-full hover:bg-secondary hover:text-neutral text-center transition duration-300"
                >
                  Reservar ahora
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
