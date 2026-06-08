import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const industriesData = [
  {
    id: '01',
    name: 'Food Industry',
    description: 'High-grade, pure salt solutions for food preservation, seasoning, and processing compliance.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02',
    name: 'Pharmaceutical',
    description: 'Ultra-pure grade sodium chloride manufactured under strict standards for medical use.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03',
    name: 'Water Treatment',
    description: 'Coarse salt crystals optimized for water softening systems and industrial filtration.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '04',
    name: 'Chemical Industry',
    description: 'Essential raw materials for chlor-alkali production and chemical synthesis.',
    image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '05',
    name: 'Animal Feed',
    description: 'Mineral-fortified salt grades critical for livestock health and feed manufacturing.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '06',
    name: 'Fishery & Preservation',
    description: 'Specialized curing and preserving salt for the marine food sector and cold storage.',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '07',
    name: 'Textile & Dyeing',
    description: 'High-solubility dyeing salt facilitating even color fixing in fabric processing.',
    image: 'https://images.unsplash.com/photo-1524295988897-b13b63a29d3b?auto=format&fit=crop&q=80&w=800',
  }
];

// Triple the list for a seamless loop
const marqueeItems = [...industriesData, ...industriesData, ...industriesData];

const IndustryWeServe = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="relative z-40 py-20 md:py-28 bg-brand-background overflow-hidden border-b border-brand-dark/5">
      <div className="max-w-[110rem] mx-auto px-6 md:px-10">
        
        {/* Header Grid matching the image layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <span data-animate="fade-up" data-delay="100" className="text-brand-accent font-jakarta font-bold text-sm tracking-widest uppercase mb-3 block">
              Industries We Serve
            </span>
            <h2 data-animate="fade-up" data-delay="200" className="text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-bold text-brand-dark leading-none tracking-tight uppercase">
              Powering Global Sectors with Our <span className="text-brand-accent">Premium Salt</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p data-animate="fade-up" data-delay="300" className="text-brand-dark/60 font-manrope font-light text-base md:text-lg leading-relaxed lg:pl-6">
              Delivering high-purity, custom-refined salt solutions tailored to meet the rigorous demands of manufacturing and processing globally.
            </p>
          </div>
        </div>
      </div>

      {/* Seamless Marquee Container */}
      <div data-animate="fade-up" data-delay="400" className="relative flex overflow-x-hidden group py-10">
        <div className="flex animate-marquee-industries whitespace-nowrap">
          {marqueeItems.map((item, index) => {
            // Alternate translation on desktop to get the staggered look from the image
            const staggeredClass = index % 2 === 1 ? 'lg:translate-y-8' : 'lg:translate-y-0';
            
            return (
              <div 
                key={`${item.id}-${index}`}
                className="mx-3 flex-shrink-0"
              >
                <div 
                  className={`relative w-[280px] sm:w-[320px] aspect-[3/4.2] rounded-[2.5rem] overflow-hidden group/card shadow-lg transition-transform duration-500 ${staggeredClass}`}
                >
                  {/* Background Image */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105" 
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover/card:opacity-95 transition-opacity duration-500"></div>

                  {/* Big Transparent Number in Top Right */}
                  <span className="absolute top-6 right-8 font-clash font-bold text-5xl md:text-6xl text-white/10 group-hover/card:text-white/20 transition-colors duration-300 pointer-events-none">
                    {item.id}
                  </span>

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-1/2 whitespace-normal">
                    {/* Decorative Yellow line */}
                    <div className="w-10 h-[3px] bg-amber-500 mb-4 rounded-full"></div>
                    
                    {/* Title */}
                    <h3 className="text-white font-heading font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
                      {item.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/70 font-manrope font-light text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-background to-transparent z-10 pointer-events-none" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-industries {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-industries {
          animation: marquee-industries 35s linear infinite;
          will-change: transform;
        }
        .group:hover .animate-marquee-industries {
          animation-play-state: paused;
        }
      ` }} />
    </section>
  );
};

export default IndustryWeServe;
