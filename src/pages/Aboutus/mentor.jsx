import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { GraduationCap, Landmark, Compass, Target, Quote } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Mentor = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative z-40 bg-[#FDFCF7] py-20 md:py-32 border-t border-[#2D4F44]/5 overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-none px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div
            data-animate="fade-up"
            className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#2D4F44]/5 border border-[#2D4F44]/10 text-[#2D4F44] text-xs font-bold tracking-[0.2em] uppercase mb-5 animate-in fade-in"
          >
            Meet the Founder
          </div>
          <h2
            data-animate="fade-up"
            data-delay="100"
            className="text-4xl md:text-5xl font-heading font-black text-[#2D4F44] leading-tight tracking-tight max-w-2xl mx-auto"
          >
            The Mind Behind the Mission
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

          {/* LEFT — Profile Highlights Stack (No photo required, clean premium card items) */}
          <div className="w-full lg:col-span-5 flex flex-col justify-between gap-6 lg:gap-0 lg:h-full lg:sticky lg:top-28">

            {/* Highlights Header */}
            <div className="mb-2">
              <span className="text-[#5BA298] text-xs font-black tracking-widest uppercase block mb-1">
                Founder Credentials
              </span>
              <h4 className="text-xl font-bold text-[#2D4F44] tracking-tight">
                Key Pillars of Leadership
              </h4>
            </div>

            {/* Card 1: Education */}
            <div
              data-animate="fade-right"
              className="bg-white border-l-4 border-[#5BA298] rounded-r-2xl p-6 shadow-[0_4px_20px_rgba(45,79,68,0.02)] border border-[#2D4F44]/5 hover:shadow-[0_10px_30px_rgba(45,79,68,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#5BA298]/10 flex items-center justify-center text-[#5BA298]">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <h5 className="font-bold text-[#2D4F44] text-base">Academic Foundation</h5>
              </div>
              <p className="text-[#2D4F44]/70 text-sm leading-relaxed">
                MBA from Nirma University, specializing in Global Markets, Supply Chains, and Strategic International Management.
              </p>
            </div>

            {/* Card 2: Legacy */}
            <div
              data-animate="fade-right"
              data-delay="50"
              className="bg-white border-l-4 border-[#5BA298] rounded-r-2xl p-6 shadow-[0_4px_20px_rgba(45,79,68,0.02)] border border-[#2D4F44]/5 hover:shadow-[0_10px_30px_rgba(45,79,68,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#5BA298]/10 flex items-center justify-center text-[#5BA298]">
                  <Landmark className="w-5.5 h-5.5" />
                </div>
                <h5 className="font-bold text-[#2D4F44] text-base">Industrial Heritage</h5>
              </div>
              <p className="text-[#2D4F44]/70 text-sm leading-relaxed">
                Deep-rooted connection to salt manufacturing, spending early years learning traditional processing from the ground up.
              </p>
            </div>

            {/* Card 3: Advantage */}
            <div
              data-animate="fade-right"
              data-delay="100"
              className="bg-white border-l-4 border-[#5BA298] rounded-r-2xl p-6 shadow-[0_4px_20px_rgba(45,79,68,0.02)] border border-[#2D4F44]/5 hover:shadow-[0_10px_30px_rgba(45,79,68,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#5BA298]/10 flex items-center justify-center text-[#5BA298]">
                  <Compass className="w-5.5 h-5.5" />
                </div>
                <h5 className="font-bold text-[#2D4F44] text-base">Strategic Logistics</h5>
              </div>
              <p className="text-[#2D4F44]/70 text-sm leading-relaxed">
                Raised near Mundra & Kandla ports, developing a native understanding of port logistics and global supply corridors.
              </p>
            </div>

            {/* Card 4: Vision */}
            <div
              data-animate="fade-right"
              data-delay="150"
              className="bg-white border-l-4 border-[#5BA298] rounded-r-2xl p-6 shadow-[0_4px_20px_rgba(45,79,68,0.02)] border border-[#2D4F44]/5 hover:shadow-[0_10px_30px_rgba(45,79,68,0.06)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#5BA298]/10 flex items-center justify-center text-[#5BA298]">
                  <Target className="w-5.5 h-5.5" />
                </div>
                <h5 className="font-bold text-[#2D4F44] text-base">Global Trade Mission</h5>
              </div>
              <p className="text-[#2D4F44]/70 text-sm leading-relaxed">
                Connecting Kutch salt fields directly to international shores through transparent, quality-first export standards.
              </p>
            </div>

          </div>

          {/* RIGHT — Content (Full biography, styled elegantly) */}
          <div data-animate="fade-left" data-delay="150" className="flex flex-col lg:col-span-7 lg:pl-6">

            <span className="text-[#5BA298] text-xs font-black tracking-[0.2em] uppercase mb-2 block">
              Founder & Director
            </span>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-[#2D4F44] mb-8 leading-tight">
              Mr. Aayush Jain
            </h3>

            <div className="flex flex-col gap-8 text-[#2D4F44]/80 text-[15px] md:text-base leading-relaxed font-jakarta">

              {/* Leader Highlight Quote */}
              <div className="relative pl-6 border-l-4 border-[#2D4F44]/20 py-2 my-2 bg-[#2D4F44]/2 p-4 rounded-r-xl">
                <Quote className="absolute -left-2.5 -top-3 w-8 h-8 text-[#5BA298]/15 rotate-180" />
                <p className="font-semibold text-lg text-[#2D4F44] leading-snug">
                  Every great enterprise begins with a story—and ours begins in the salt-rich landscape of Kutch, Gujarat.
                </p>
              </div>

              {/* Sub-section 1 */}
              <div>
                <h5 className="font-bold text-[#2D4F44] text-lg mb-2">Roots in Kutch & Port Logistics</h5>
                <p>
                  Raised near Mundra and Kandla, two of India's most important gateways for global trade, Mr. Aayush Jain witnessed how the region's vast salt fields fuel industries and economies across the world. Kutch is not only one of India's largest salt-producing regions, but it has also long been at the centre of the country's salt export ecosystem, connecting local producers with international markets through its world-class ports.
                </p>
                <p className="mt-4">
                  While many viewed salts as a commodity, he recognized a story of hard work, heritage, and untapped global potential.
                </p>
              </div>

              {/* Sub-section 2 */}
              <div>
                <h5 className="font-bold text-[#2D4F44] text-lg mb-2"> Decades of Industry Heritage</h5>
                <p>
                  Belonging to a family deeply connected to salt manufacturing, he spent his early years understanding the industry from the ground up, learning how nature, precision, and perseverance come together to create a product that reaches millions of people and industries worldwide. These experiences shaped his appreciation for quality, reliability, and long-term relationships.
                </p>
                <p className="mt-4">
                  Driven by a desire to combine traditional industry knowledge with modern business thinking, he pursued his MBA from Nirma University. There, he developed a deeper understanding of global markets, supply chains, and international business strategy. The experience broadened his perspective and strengthened his belief that Indian manufacturers could compete and thrive on the world stage.
                </p>
              </div>

              {/* Sub-section 3 */}
              <div>
                <h5 className="font-bold text-[#2D4F44] text-lg mb-2">Decades of Manufacturing to Global Markets</h5>
                <p>
                  Today, as a young entrepreneur, he is leading the next chapter of the family's journey, transforming decades of manufacturing expertise into a globally focused enterprise. His vision is simple yet ambitious: to deliver premium-quality salt from the heart of Kutch to customers across the world while building lasting partnerships based on trust, consistency, and excellence.
                </p>
                <p className="mt-4">
                  For him, exporting salt is more than a business expansion. It is about carrying the legacy of Kutch, the spirit of Indian manufacturing, and the values of integrity and quality to international shores.
                </p>
              </div>
            </div>

            {/* Social Icons & Signature Footer */}
            <div className="flex items-center justify-between border-t border-[#2D4F44]/10 pt-8 mt-10">
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 border border-[#2D4F44]/20 rounded-full flex items-center justify-center text-[#2D4F44]/70 hover:bg-[#2D4F44] hover:text-[#FDFCF7] hover:scale-105 transition-all duration-300 shadow-sm">
                  <FacebookIcon />
                </a>
                <a href="#" className="w-10 h-10 border border-[#2D4F44]/20 rounded-full flex items-center justify-center text-[#2D4F44]/70 hover:bg-[#2D4F44] hover:text-[#FDFCF7] hover:scale-105 transition-all duration-300 shadow-sm">
                  <TwitterIcon />
                </a>
                <a href="#" className="w-10 h-10 border border-[#2D4F44]/20 rounded-full flex items-center justify-center text-[#2D4F44]/70 hover:bg-[#2D4F44] hover:text-[#FDFCF7] hover:scale-105 transition-all duration-300 shadow-sm">
                  <LinkedinIcon />
                </a>
              </div>

              {/* Styled name signature */}
              <div className="text-right">
                <span className="font-bold text-[#2D4F44] text-base block font-heading tracking-wide">Aayush Jain</span>
                <span className="text-xs text-[#2D4F44]/50 font-bold uppercase tracking-wider block">PDJ Trade Connect</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Mentor;
