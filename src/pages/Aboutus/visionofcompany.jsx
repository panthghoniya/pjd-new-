import React from 'react';
import { ArrowUpRight, Target, Eye, Diamond } from 'lucide-react';

export default function VisionOfCompany() {
  return (
    <section className="w-full bg-[#FDFCF7] py-20 lg:py-32 relative overflow-hidden border-t border-[#2D4F44]/5">
      <div className="container mx-auto px-6 lg:px-12 ">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-12">
          
          {/* Left Side: Circular Text & Arrow */}
          <div className="w-full lg:w-[30%] flex justify-center relative mt-4 lg:mt-8">
            <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center group cursor-pointer">
              {/* Rotating Text SVG */}
              <svg viewBox="0 0 100 100" className="absolute w-47 h-47 animate-spin-slow text-[#2D4F44] overflow-visible">
                <path id="textPath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                <text className="text-[10px] font-bold uppercase" fill="currentColor" style={{ letterSpacing: '0.18em' }}>
                  <textPath href="#textPath" startOffset="0%">
                    • PARTNER WITH US • GLOBAL EXPORT • PARTNER WITH US • GLOBAL EXPORT 
                  </textPath>
                </text>
              </svg>
              {/* Arrow inside */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-[#2D4F44] rounded-full bg-[#2D4F44]/5 group-hover:bg-[#5BA298] group-hover:text-[#FDFCF7] transition-all duration-300 shadow-sm">
                <ArrowUpRight size={32} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            {/* Horizontal connecting line (Desktop only) */}
            {/* <div className="hidden lg:block absolute top-1/2 -right-6 w-16 h-[1px] bg-[#2D4F44]/20 -translate-y-1/2"></div> */}
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-[70%] lg:pl-10">
            <div className="mb-12 text-center lg:text-left">
              <span className="text-[#5BA298] font-bold tracking-widest uppercase text-sm mb-4 block">
                Core Philosophy
              </span>
              <h2 className="text-[#2D4F44] font-heading text-[clamp(2rem,3.5vw,3rem)] font-black leading-tight max-w-3xl mx-auto lg:mx-0">
                Driving Excellence Through Premium Salt Innovation
              </h2>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8">
              
              {/* Mission */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="w-16 h-16 rounded-full bg-[#2D4F44]/5 flex items-center justify-center mb-6 group-hover:bg-[#2D4F44] transition-colors duration-300">
                  <Target size={28} className="text-[#2D4F44] group-hover:text-[#FDFCF7] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#2D4F44] mb-3">Our Mission</h3>
                <p className="text-[#2D4F44]/70 text-sm leading-relaxed max-w-sm">
                  To deliver high-quality salt products to global markets through consistent quality standards, customized solutions, reliable supply, and customer-focused service. We aim to build long-term partnerships by providing export-ready products that meet the evolving needs of international industries and consumers.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="w-16 h-16 rounded-full bg-[#2D4F44]/5 flex items-center justify-center mb-6 group-hover:bg-[#2D4F44] transition-colors duration-300">
                  <Eye size={28} className="text-[#2D4F44] group-hover:text-[#FDFCF7] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#2D4F44] mb-3">Our Vision</h3>
                <p className="text-[#2D4F44]/70 text-sm leading-relaxed max-w-sm">
                  To become a globally trusted name in the salt export industry by continuously enhancing product quality, expanding international reach, and delivering value-driven solutions with professionalism, integrity, and excellence.
                </p>
              </div>

              {/* Values */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0">
                <div className="w-16 h-16 rounded-full bg-[#2D4F44]/5 flex items-center justify-center mb-6 group-hover:bg-[#2D4F44] transition-colors duration-300">
                  <Diamond size={28} className="text-[#2D4F44] group-hover:text-[#FDFCF7] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#2D4F44] mb-3">Our Values</h3>
                <p className="text-[#2D4F44]/70 text-sm leading-relaxed max-w-sm">
                  We believe that lasting business relationships are built on quality, integrity, reliability, and customer satisfaction. Every product we manufacture and export reflects our commitment to international standards, transparent business practices, customized solutions, and timely deliveries. By consistently creating value for our customers, we strive to be a trusted partner in the global salt industry.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
