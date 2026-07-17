import React from 'react';
import { factory as img1, manWithSalt as img2 } from '../../assets/images';

const ProcessSteps = [
  {
    id: "01",
    title: "HALAL, ISO & FSSAI Certified Company",
    // description: "We source the finest raw salt directly from pristine natural salt pans.",
    image: img2
  },
  {
    id: "02",
    title: "Strict Quality Testing Before Export",
    // description: "State-of-the-art washing and refining processes ensure maximum purity.",
    image: img1
  },
  {
    id: "03",
    title: "Proper Handling & Safe Export Packaging",
    // description: "Rigorous testing protocols guarantee compliance with global export standards.",
    image: img2
  },
  {
    id: "04",
    title: "Located Near Kandla & Mundra Ports for Efficient Export Logistics",
    // description: "Customized packaging and efficient shipping to clients worldwide.",
    image: img1
  }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#FDFCF7] py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-[#5BA298] font-bold tracking-widest uppercase text-sm mb-4 block">
            Why choose
          </span>
          <h2 className="text-[#2D4F44] font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight">
            PDJ TRADE CONNECT
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {ProcessSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-default">

              {/* Image Circle Container */}
              <div className="relative mb-8">
                {/* Decorative outer ring */}
                <div className="absolute -inset-4 border border-[#2D4F44]/20 rounded-full transition-transform duration-500 group-hover:scale-105"></div>

                {/* Image Circle */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-[6px] border-[#FDFCF7] shadow-[0_10px_30px_rgba(45,79,68,0.15)] z-10 bg-[#2D4F44]/5">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 z-20 translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-full bg-[#5BA298] text-[#FDFCF7] flex items-center justify-center font-bold text-sm shadow-md border-[3px] border-[#FDFCF7]">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[#2D4F44] text-sm lg:text-base font-bold mb-3 max-w-[280px]">{step.title}</h3>
              <p className="text-[#2D4F44]/70 text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
