import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Quote, MapPin, Mail, Navigation } from 'lucide-react';

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
    <section ref={ref} className="w-full bg-[#FDFCF7] overflow-hidden">
      
      {/* --- Smaller Profile Banner Header --- */}
      <div className="w-full bg-[#2D4F44] relative py-12 md:py-20 border-b-[6px] border-[#5BA298]">
        {/* Subtle background pattern/glow in banner */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5BA298]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-sm border border-white/20 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-[#5BA298]" />
            Leadership
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tight drop-shadow-md">
            Meet the Founder
          </h2>
        </div>
      </div>

      {/* --- Main Profile Content (Unified Container for Text Wrap) --- */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20 pb-24 md:pb-32 -mt-8 md:-mt-12">
        
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(45,79,68,0.06)] border border-[#2D4F44]/5 relative">
          
          <div className="clearfix">
            {/* LEFT: Floated Profile Picture Card */}
            <div className="w-full sm:w-[320px] md:w-[360px] lg:w-[400px] float-none sm:float-left mr-0 sm:mr-10 lg:mr-12 mb-8 sm:mb-6 shrink-0 relative z-30">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative group border-4 border-white">
                {/* Placeholder Image */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Mr. Aayush Jain"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Mobile Only Info under photo */}
              <div className="sm:hidden mt-6 pb-2 text-center">
                <div className="flex justify-center items-center gap-2 text-sm font-bold text-[#2D4F44] mb-4">
                  <MapPin className="w-4 h-4 text-[#5BA298]" /> Kutch, Gujarat
                </div>
                <div className="flex justify-center items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border-2 border-[#2D4F44]/10 flex items-center justify-center text-[#2D4F44] hover:bg-[#5BA298] hover:border-[#5BA298] hover:text-white transition-all"><FacebookIcon /></a>
                  <a href="#" className="w-10 h-10 rounded-full border-2 border-[#2D4F44]/10 flex items-center justify-center text-[#2D4F44] hover:bg-[#5BA298] hover:border-[#5BA298] hover:text-white transition-all"><TwitterIcon /></a>
                  <a href="#" className="w-10 h-10 rounded-full border-2 border-[#2D4F44]/10 flex items-center justify-center text-[#2D4F44] hover:bg-[#5BA298] hover:border-[#5BA298] hover:text-white transition-all"><LinkedinIcon /></a>
                </div>
              </div>
            </div>

            {/* RIGHT & BOTTOM: Wrapping Biography Text */}
            <div className="text-[#2D4F44]/80 text-[15px] md:text-lg leading-relaxed font-jakarta">
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#2D4F44] mb-2 leading-tight mt-4 sm:mt-0">
                Mr. Aayush Jain
              </h3>
              <p className="text-[#5BA298] font-bold tracking-[0.2em] uppercase text-sm mb-8 flex items-center gap-3">
                Founder & Director 
                <span className="hidden sm:inline-flex items-center gap-1 text-[#2D4F44]/60 text-xs normal-case tracking-normal">
                  <MapPin className="w-3.5 h-3.5" /> Kutch, Gujarat
                </span>
              </p>

              {/* Highlight Quote */}
              <div className="relative pl-6 md:pl-8 border-l-4 border-[#5BA298] py-2 mb-8 bg-[#5BA298]/[0.02]">
                <Quote className="absolute -left-4 -top-3 w-8 h-8 text-[#5BA298]/20 rotate-180" />
                <p className="font-medium text-xl md:text-2xl text-[#2D4F44] leading-snug font-heading italic">
                  "Every great enterprise begins with a story—and ours begins in the salt-rich landscape of Kutch, Gujarat."
                </p>
              </div>

              {/* Paragraph Blocks */}
              <div className="mt-8">
                <h5 className="font-bold text-[#2D4F44] text-xl md:text-2xl mb-3 font-heading">
                  Roots in Kutch & Port Logistics
                </h5>
                <p className="mb-4">
                  Raised near Mundra and Kandla, two of India's most important gateways for global trade, Mr. Aayush Jain witnessed how the region's vast salt fields fuel industries and economies across the world. Kutch is not only one of India's largest salt-producing regions, but it has also long been at the centre of the country's salt export ecosystem, connecting local producers with international markets through its world-class ports.
                </p>
                <p className="mb-8">
                  While many viewed salts as a commodity, he recognized a story of hard work, heritage, and untapped global potential.
                </p>
                <br />

                <h5 className="font-bold text-[#2D4F44] text-xl md:text-2xl mb-3 font-heading">
                  Decades of Industry Heritage
                </h5>
                <p className="mb-4">
                  Belonging to a family deeply connected to salt manufacturing, he spent his early years understanding the industry from the ground up, learning how nature, precision, and perseverance come together to create a product that reaches millions of people and industries worldwide. These experiences shaped his appreciation for quality, reliability, and long-term relationships.
                </p>
                <p className="mb-8">
                  Driven by a desire to combine traditional industry knowledge with modern business thinking, he pursued his MBA from Nirma University. There, he developed a deeper understanding of global markets, supply chains, and international business strategy. The experience broadened his perspective and strengthened his belief that Indian manufacturers could compete and thrive on the world stage.
                </p>

                <h5 className="font-bold text-[#2D4F44] text-xl md:text-2xl mb-3 font-heading">
                  Transforming Manufacturing to Global Markets
                </h5>
                <p className="mb-4">
                  Today, as a young entrepreneur, he is leading the next chapter of the family's journey, transforming decades of manufacturing expertise into a globally focused enterprise. His vision is simple yet ambitious: to deliver premium-quality salt from the heart of Kutch to customers across the world while building lasting partnerships based on trust, consistency, and excellence.
                </p>
                <p className="mb-8">
                  For him, exporting salt is more than a business expansion. It is about carrying the legacy of Kutch, the spirit of Indian manufacturing, and the values of integrity and quality to international shores.
                </p>
              </div>

            </div>
          </div>

          {/* Signature Footer */}
          <div className="clear-both mt-8 pt-8 border-t border-[#2D4F44]/10 flex flex-col md:flex-row justify-between items-start md:items-center">
            
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#2D4F44]/10 flex items-center justify-center text-[#2D4F44] hover:bg-[#5BA298] hover:border-[#5BA298] hover:text-white transition-all"><FacebookIcon /></a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#2D4F44]/10 flex items-center justify-center text-[#2D4F44] hover:bg-[#5BA298] hover:border-[#5BA298] hover:text-white transition-all"><TwitterIcon /></a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#2D4F44]/10 flex items-center justify-center text-[#2D4F44] hover:bg-[#5BA298] hover:border-[#5BA298] hover:text-white transition-all"><LinkedinIcon /></a>
            </div>

            <div className="text-left md:text-right flex items-center gap-6">
              <div>
                <span className="font-black text-[#2D4F44] text-xl md:text-2xl block font-heading tracking-wide">Aayush Jain</span>
                <span className="text-sm text-[#5BA298] font-bold uppercase tracking-[0.2em] block mt-1">PDJ Trade Connect</span>
              </div>
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#2D4F44] text-white hover:bg-[#5BA298] transition-colors cursor-pointer shadow-lg shadow-[#2D4F44]/20">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mentor;
