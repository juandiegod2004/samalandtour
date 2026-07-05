import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Carlos R.",
      rating: 5,
      text: `"Una experiencia increíble en Cabo San Juan. La organización fue perfecta desde que nos recogieron hasta el final del día. Los guías muy amables y conocedores."`
    },
    {
      name: "Ana M.",
      rating: 5,
      text: `"El tour a Playa Cristal superó mis expectativas. El almuerzo estuvo delicioso y el equipo nos hizo sentir seguros y cómodos en todo momento. 100% recomendado."`
    },
    {
      name: "John D.",
      rating: 4.5,
      text: `"Bahía Concha es un paraíso. Agradezco a la agencia por su profesionalismo y por promover un turismo tan responsable con el parque."`
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`f-${i}`} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      );
    }
    if (hasHalf) {
      stars.push(
        <span key="h" className="material-symbols-outlined text-[16px]">star_half</span>
      );
    }
    const remaining = 5 - Math.ceil(rating);
    for (let i = 0; i < remaining; i++) {
      stars.push(
        <span key={`e-${i}`} className="material-symbols-outlined text-[16px]">star</span>
      );
    }
    return stars;
  };

  return (
    <section className="py-20 bg-surface" id="testimonios">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-headline font-semibold leading-[40px] text-primary mb-3">Lo que dicen nuestros viajeros</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 flex flex-col shadow-card hover:shadow-card-hover transform hover:-translate-y-[6px] transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-outline">person</span>
                </div>
                <div>
                  <h4 className="text-sm font-body font-semibold tracking-wider text-on-surface">{review.name}</h4>
                  <div className="flex text-tertiary-container">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-base font-body font-normal leading-normal text-on-surface-variant italic flex-grow">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
