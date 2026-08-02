import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Mmm = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative z-20 bg-brand-background py-24 md:py-32 overflow-x-hidden" ref={ref}>
      <div className="max-w-[110rem] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="flex flex-col items-start max-w-2xl">
            {/* Badge */}
            <div data-animate="fade-up" data-delay="100" className="bg-brand-accent text-white px-5 py-1.5 rounded-full text-sm font-bold font-jakarta tracking-wide mb-8 shadow-sm">
              SERVICE OVERVIEW
            </div>

            {/* Heading */}
            <h2 data-animate="fade-up" data-delay="200" className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-dark leading-[1.3] mb-8 tracking-tight font-clash uppercase">
              POWERING GLOBAL INDUSTRIES WITH PREMIUM SALT
            </h2>

            {/* Paragraphs */}
            <div data-animate="fade-up" data-delay="350" className="space-y-6 text-brand-dark/70 text-lg md:text-xl leading-relaxed mb-8 font-manrope font-light">
              <p>
                PDJ TRADE CONNECT is a leading manufacturer and exporter of premium-quality edible grade salt and industrial salt, delivering reliable products with customized packaging and global supply solutions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div data-animate="fade-up" data-delay="400" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {[
                "Premium Quality Salt",
                "Global Export Supply",
                "Customized Packaging",
                "Timely Shipment Delivery"
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-brand-dark text-base md:text-lg font-jakarta font-semibold">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    ✓
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div data-animate="fade-up" data-delay="500">
              <a href="/product" className="inline-flex items-center gap-6 bg-brand-dark hover:bg-brand-black text-white px-8 py-4 rounded-2xl font-bold font-jakarta transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
                Explore Products
                <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Images Bento Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 h-[400px] sm:h-[500px] lg:h-[700px] w-full">
            <div data-animate="fade-right" data-delay="200" className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-2 overflow-hidden rounded-[2rem] shadow-xl group hover-lift">
              <img
                src="/images/service/service_overview.png"
                alt="Service Overview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div data-animate="fade-right" data-delay="350" className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 overflow-hidden rounded-[2rem] shadow-lg group hover-lift">
              <img
                src="/images/service/service_overview_2.png"
                alt="Service Overview 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div data-animate="fade-right" data-delay="500" className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 overflow-hidden rounded-[2rem] shadow-lg group hover-lift">
              <img
                src="https://i.pinimg.com/736x/f7/74/33/f77433b84d4273a3cbe393f57117edc1.jpg"
                alt="Salt Harvesting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mmm;
