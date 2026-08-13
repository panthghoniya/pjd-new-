import React from 'react';
import { Target, Eye, Diamond } from 'lucide-react';

export default function VisionOfCompany() {
  return (
    <section className="w-full bg-[#FDFCF7] py-20 lg:py-32 relative overflow-hidden border-t border-[#2D4F44]/5">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-[#5BA298] font-bold tracking-widest uppercase text-sm mb-4 block">
            Core Philosophy
          </span>
          <h2 className="text-[#2D4F44] font-heading text-[clamp(2rem,3.5vw,3.5rem)] font-black leading-tight max-w-4xl mx-auto">
            Driving Excellence Through Premium Salt Innovation
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Mission Pill */}
          <div className="flex flex-col items-center text-center bg-white rounded-full p-4 pb-28 md:pb-32 shadow-[0_15px_40px_rgba(45,79,68,0.06)] w-full h-full max-w-[360px] mx-auto hover:-translate-y-3 transition-transform duration-500 border border-[#2D4F44]/5 group">
            {/* Colored Ring */}
            <div className="w-full aspect-square rounded-full bg-[#2D4F44]/[0.04] p-4 shrink-0">
              {/* Inner White Circle */}
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(45,79,68,0.08)] group-hover:bg-[#5BA298] transition-colors duration-500">
                <Target size={64} className="text-[#5BA298] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Content */}
            <div className="mt-10 px-6 flex-1 flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#2D4F44] mb-5 uppercase tracking-[0.15em]">Mission</h3>
              <p className="text-[#2D4F44]/75 text-sm leading-relaxed font-medium">
                To deliver high-quality salt products to global markets through consistent quality standards, customized solutions, reliable supply, and customer-focused service. We aim to build long-term partnerships by providing export-ready products that meet the evolving needs of international industries and consumers.
              </p>
            </div>
          </div>

          {/* Vision Pill */}
          <div className="flex flex-col items-center text-center bg-white rounded-full p-4 pb-28 md:pb-32 shadow-[0_15px_40px_rgba(45,79,68,0.06)] w-full h-full max-w-[360px] mx-auto hover:-translate-y-3 transition-transform duration-500 border border-[#2D4F44]/5 group">
            {/* Colored Ring */}
            <div className="w-full aspect-square rounded-full bg-[#5BA298]/[0.08] p-4 shrink-0">
              {/* Inner White Circle */}
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(45,79,68,0.08)] group-hover:bg-[#2D4F44] transition-colors duration-500">
                <Eye size={64} className="text-[#2D4F44] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Content */}
            <div className="mt-10 px-6 flex-1 flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#2D4F44] mb-5 uppercase tracking-[0.15em]">Vision</h3>
              <p className="text-[#2D4F44]/75 text-sm leading-relaxed font-medium">
                To become a globally trusted name in the salt export industry by continuously enhancing product quality, expanding international reach, and delivering value-driven solutions with professionalism, integrity, and excellence.
              </p>
            </div>
          </div>

          {/* Values Pill */}
          <div className="flex flex-col items-center text-center bg-white rounded-full p-4 pb-28 md:pb-32 shadow-[0_15px_40px_rgba(45,79,68,0.06)] w-full h-full max-w-[360px] mx-auto hover:-translate-y-3 transition-transform duration-500 border border-[#2D4F44]/5 group md:col-span-1 sm:col-span-1">
            {/* Colored Ring */}
            <div className="w-full aspect-square rounded-full bg-[#2D4F44]/[0.04] p-4 shrink-0">
              {/* Inner White Circle */}
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(45,79,68,0.08)] group-hover:bg-[#5BA298] transition-colors duration-500">
                <Diamond size={64} className="text-[#5BA298] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Content */}
            <div className="mt-10 px-6 flex-1 flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#2D4F44] mb-5 uppercase tracking-[0.15em]">Values</h3>
              <p className="text-[#2D4F44]/75 text-sm leading-relaxed font-medium">
               We believe that lasting business relationships are built on quality, integrity, reliability, and customer satisfaction. Every product we manufacture and export reflects our commitment to international standards, transparent business practices, customized solutions, and timely deliveries. By consistently creating value for our customers, we strive to be a trusted partner in the global salt industry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
