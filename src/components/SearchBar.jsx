import React, { useState } from 'react';

export default function SearchBar() {
  const [destination, setDestination] = useState('Todos');
  const [activity, setActivity] = useState('Todas');
  const [people, setPeople] = useState('1');

  const handleSearch = (e) => {
    e.preventDefault();
    // Smooth scroll to tours section
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 bg-neutral relative z-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <form 
          onSubmit={handleSearch}
          className="bg-white rounded-2xl md:rounded-full p-3 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 text-neutral shadow-ambient"
        >
          {/* Destination */}
          <div className="px-6 py-2 flex-1 w-full text-left">
            <label className="text-[10px] text-slate-400 font-headline font-bold uppercase tracking-wider mb-1 block">
              Destino
            </label>
            <select 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-sm font-headline font-medium focus:outline-none border-none p-0 cursor-pointer text-neutral outline-none"
            >
              <option value="Todos">Cualquier Playa</option>
              <option value="Cabo San Juan">Cabo San Juan</option>
              <option value="Playa Cristal">Playa Cristal</option>
              <option value="Bahia Concha">Bahía Concha</option>
            </select>
          </div>

          {/* Activity */}
          <div className="px-6 py-2 flex-1 w-full text-left">
            <label className="text-[10px] text-slate-400 font-headline font-bold uppercase tracking-wider mb-1 block">
              Actividad
            </label>
            <select 
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full bg-transparent text-sm font-headline font-medium focus:outline-none border-none p-0 cursor-pointer text-neutral outline-none"
            >
              <option value="Todas">Todas las actividades</option>
              <option value="Aventura">Aventura / Trekking</option>
              <option value="Snorkel">Snorkel / Buceo</option>
              <option value="Relax">Relajación / Playa</option>
            </select>
          </div>

          {/* People count */}
          <div className="px-6 py-2 flex-1 w-full text-left">
            <label className="text-[10px] text-slate-400 font-headline font-bold uppercase tracking-wider mb-1 block">
              Personas
            </label>
            <select 
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full bg-transparent text-sm font-headline font-medium focus:outline-none border-none p-0 cursor-pointer text-neutral outline-none"
            >
              <option value="1">1 Persona</option>
              <option value="2">2 Personas</option>
              <option value="3">3 Personas</option>
              <option value="4+">4 o más</option>
            </select>
          </div>

          {/* Submit button */}
          <div className="w-full md:w-auto pl-0 md:pl-4 pr-0 md:pr-2 py-2">
            <button 
              type="submit"
              className="w-full bg-primary text-white px-8 py-3.5 rounded-full font-headline font-semibold text-xs tracking-wider hover:bg-primary/95 transition duration-300 whitespace-nowrap cursor-pointer shadow-cta hover:shadow-cta-hover"
            >
              Buscar Tour
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
