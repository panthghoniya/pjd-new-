import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import productsRaw from '../../data/products.json';

// Map products.json fields to what the slider needs
const sliderData = productsRaw.map(p => ({
  id: p.id,
  image: p.images[0],
  title: p.name,
  subtitle: p.category
}));

const Fourth = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const ref = useScrollAnimation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else if (window.innerWidth < 1280) setCardsToShow(3);
      else setCardsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsToShow]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) > (sliderData.length - cardsToShow) ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? (sliderData.length - cardsToShow) : prevIndex - 1
    );
  };

  return (
    <section ref={ref} className="relative lg:sticky lg:top-0 z-30 py-16 md:py-24 lg:py-32 bg-brand-background lg:overflow-hidden lg:h-screen flex items-center">
      <div className="max-w-[110rem] mx-auto px-6 md:px-10 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
          <h2 data-animate="fade-left" className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-dark font-heading leading-tight max-w-2xl tracking-tight">
            Our Global Export <br /> Catalogue 2024
          </h2>
          <Link 
            to="/product" 
            data-animate="fade-right" 
            data-delay="200"
            className="group flex items-center gap-4 bg-brand-dark hover:bg-brand-accent text-white pl-8 pr-2 py-2 rounded-full transition-all duration-500 shadow-xl hover:shadow-[0_10px_30px_rgba(91,162,152,0.3)] hover:-translate-y-1 flex-shrink-0"
          >
            <span className="font-bold tracking-widest uppercase text-sm">Explore More</span>
            <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
              <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* Slider Section */}
        <div data-animate="fade-up" data-delay="300" className="relative w-full -mx-3">
          <div className="overflow-hidden w-full px-3 pb-8">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {sliderData.map((slide) => (
                <div 
                  key={slide.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsToShow}%` }}
                >
                  <Link to={`/product/${slide.id}`} className="block relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden group shadow-lg cursor-pointer hover-lift">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                      <h3 className="text-white text-xl lg:text-2xl mb-1 tracking-[1px]">{slide.title}</h3>
                      <p className="text-white/70 text-sm font-medium">{slide.subtitle}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div data-animate="fade-up" data-delay="400" className="flex flex-col sm:flex-row justify-between items-center mt-6 lg:mt-10 gap-6">
          <button className="w-full sm:w-auto flex items-center justify-center gap-4 bg-brand-dark hover:bg-brand-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl group hover:-translate-y-1">
            View Catalogue
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:bg-brand-dark hover:text-white transition-all duration-300 text-brand-dark group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:bg-brand-dark hover:text-white transition-all duration-300 text-brand-dark group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Fourth;
