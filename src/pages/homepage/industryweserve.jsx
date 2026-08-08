import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

import chemImg from '../../assets/HomePage/Chemical Industry.png';
import textileImg from '../../assets/HomePage/Textile and Dyeing.png';
import foodImg from '../../assets/HomePage/Food Industry .jpg';
import waterImg from '../../assets/HomePage/Water treatment .jpg';
import animalImg from '../../assets/HomePage/Animal Feed.jpg';

const industriesData = [
  {
    id: '01',
    name: 'Food Industry',
    description: 'High-grade, pure salt solutions for food preservation, seasoning, and processing compliance.',
    image: foodImg,
  },
  {
    id: '02',
    name: 'Pharmaceutical',
    description: 'Ultra-pure grade sodium chloride manufactured under strict standards for medical use.',
    image: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: '03',
    name: 'Water Treatment',
    description: 'Coarse salt crystals optimized for water softening systems and industrial filtration.',
    image: waterImg,
  },
  {
    id: '04',
    name: 'Chemical Industry',
    description: 'Essential raw materials for chlor-alkali production and chemical synthesis.',
    image: chemImg,
  },
  {
    id: '05',
    name: 'Animal Feed',
    description: 'Mineral-fortified salt grades critical for livestock health and feed manufacturing.',
    image: animalImg,
  },
  {
    id: '07',
    name: 'Textile & Dyeing',
    description: 'High-solubility dyeing salt facilitating even color fixing in fabric processing.',
    image: textileImg,
  }
];

// Double the items array for infinite smooth marquee looping
const marqueeItems = [...industriesData, ...industriesData];

const IndustryWeServe = () => {
  const ref = useScrollAnimation();
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    let lastTime = performance.now();
    const speed = 40; // Pixels per second (slow, smooth marquee speed)

    autoScrollRef.current = requestAnimationFrame(function scrollLoop(time) {
      if (scrollRef.current) {
        const delta = (time - lastTime) / 1000;
        lastTime = time;

        const container = scrollRef.current;
        let nextScroll = container.scrollLeft + speed * delta;
        const halfWidth = container.scrollWidth / 2;

        // Seamless infinite loop wrap
        if (nextScroll >= halfWidth) {
          nextScroll = nextScroll - halfWidth;
        }

        container.scrollLeft = nextScroll;
      } else {
        lastTime = time;
      }
      autoScrollRef.current = requestAnimationFrame(scrollLoop);
    });
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const scroll = (direction) => {
    stopAutoScroll();
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const halfWidth = container.scrollWidth / 2;
      const children = Array.from(container.children);
      
      if (children.length > 0) {
        // Dynamically compute width of a card + gap (24px)
        const cardWidth = children[0].getBoundingClientRect().width + 24;
        let targetScroll;

        if (direction === 'left') {
          // Align target scroll to the exact left card boundary
          targetScroll = (Math.ceil(scrollLeft / cardWidth) - 1) * cardWidth;
          // Wrap if scrolling left past 0
          if (targetScroll < 0) {
            container.scrollLeft = targetScroll + halfWidth;
            targetScroll = (Math.ceil(container.scrollLeft / cardWidth) - 1) * cardWidth;
          }
        } else {
          // Align target scroll to the exact right card boundary
          targetScroll = (Math.floor(scrollLeft / cardWidth) + 1) * cardWidth;
          // Wrap if scrolling right past halfWidth
          if (targetScroll >= halfWidth) {
            container.scrollLeft = targetScroll - halfWidth;
            targetScroll = (Math.floor(container.scrollLeft / cardWidth) + 1) * cardWidth;
          }
        }
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }

    // Resume continuous marquee after 4 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 4000);
  };

  return (
    <section ref={ref} className="relative z-40 py-20 md:py-28 bg-brand-background overflow-hidden border-b border-brand-dark/5">
      <div className="max-w-[110rem] mx-auto px-6 md:px-10">
        
        {/* Header with Title & Arrow Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-4xl space-y-3">
            <span data-animate="fade-up" data-delay="100" className="text-brand-accent font-jakarta font-bold text-xs sm:text-sm tracking-widest uppercase block">
              Industries We Serve
            </span>
            <h2 
              data-animate="fade-up" 
              data-delay="200" 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-heading font-bold text-brand-dark tracking-tight uppercase"
              style={{ lineHeight: '1.3' }}
            >
              Powering Global Sectors with Our <span className="text-brand-accent">Premium Salt</span>
            </h2>
            <p data-animate="fade-up" data-delay="300" className="text-brand-dark/70 font-manrope font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl pt-2">
              Delivering high-purity, custom-refined salt solutions tailored to meet the rigorous demands of manufacturing and processing globally.
            </p>
          </div>
          
          {/* Arrow Buttons */}
          <div className="flex items-center gap-3 pt-4 lg:pt-0 self-start lg:self-auto flex-shrink-0" data-animate="fade-up" data-delay="300">
            <button
              onClick={() => scroll('left')}
              onTouchStart={(e) => { e.preventDefault(); scroll('left'); }}
              className="w-12 h-12 rounded-full border border-brand-dark/15 hover:border-brand-accent hover:bg-brand-accent hover:text-white flex items-center justify-center transition-all duration-300 text-brand-dark/70 bg-white hover:scale-105 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous Industry"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              onTouchStart={(e) => { e.preventDefault(); scroll('right'); }}
              className="w-12 h-12 rounded-full border border-brand-dark/15 hover:border-brand-accent hover:bg-brand-accent hover:text-white flex items-center justify-center transition-all duration-300 text-brand-dark/70 bg-white hover:scale-105 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next Industry"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Slider Container */}
      <div 
        ref={scrollRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        onTouchStart={stopAutoScroll}
        onTouchEnd={startAutoScroll}
        data-animate="fade-up" 
        data-delay="400" 
        className="relative flex overflow-x-auto no-scrollbar gap-6 py-12 px-6 md:px-10 max-w-[110rem] mx-auto"
      >
        {marqueeItems.map((item, index) => {
          // Alternate translation on desktop to get the staggered look
          const staggeredClass = index % 2 === 1 ? 'lg:translate-y-6' : 'lg:translate-y-0';
          
          return (
            <div 
              key={`${item.id}-${index}`}
              className="flex-shrink-0"
            >
              <div 
                className={`relative w-[280px] sm:w-[320px] aspect-[3/4.2] rounded-[2.5rem] overflow-hidden group/card shadow-lg transition-transform duration-500 ${staggeredClass}`}
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105" 
                  loading="lazy"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover/card:opacity-95 transition-opacity duration-500"></div>



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
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-brand-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-brand-background to-transparent z-10 pointer-events-none" />

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      ` }} />
    </section>
  );
};

export default IndustryWeServe;
