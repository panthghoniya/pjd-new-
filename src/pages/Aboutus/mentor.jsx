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
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-20 pb-24 md:pb-32 -mt-7 md:-mt-12">
        
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(45,79,68,0.06)] border border-[#2D4F44]/5 relative">
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
            {/* LEFT: Profile Picture Card */}
            <div className="w-full lg:w-5/12 shrink-0 relative z-30">
              <div className="w-full h-full min-h-[350px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative group border-4 border-white">
                {/* Founder Image */}
                <img 
                  src="/images/founder.jpg" 
                  alt="Mr. Aayush Jain"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  <a href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-[#2D4F44]/10 flex items-center justify-center text-[#2D4F44] hover:bg-[#5BA298] hover:border-[#5BA298] hover:text-white transition-all"><LinkedinIcon /></a>
                </div>
              </div>
            </div>

            {/* RIGHT & BOTTOM: Wrapping Biography Text */}
            <div className="w-full lg:w-7/12 text-[#2D4F44]/80 text-[15px] md:text-lg leading-relaxed font-jakarta flex flex-col justify-center">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2 mt-4 sm:mt-0">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-[#2D4F44] leading-tight">
                  Mr. Aayush Jain
                </h3>
                <a 
                  href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#F3F6F8] hover:bg-[#EAEFF2] text-[#0A66C2] rounded-full transition-all border border-[#0A66C2]/20 shadow-sm text-sm font-bold"
                >
                  <LinkedinIcon /> LinkedIn
                </a>
              </div>
              <p className="text-[#5BA298] font-bold tracking-[0.2em] uppercase text-sm mb-5 flex items-center gap-3">
                Founder & Director 
                <span className="hidden sm:inline-flex items-center gap-1 text-[#2D4F44]/60 text-xs normal-case tracking-normal">
                  <MapPin className="w-3.5 h-3.5" /> Kutch, Gujarat
                </span>
              </p>

              {/* Highlight Quote */}
              <div className="relative pl-6 md:pl-8 border-l-4 border-[#5BA298] py-2 mb-6 bg-[#5BA298]/[0.02]">
                <Quote className="absolute -left-4 -top-3 w-8 h-8 text-[#5BA298]/20 rotate-180" />
                <p className="font-medium text-xl md:text-2xl text-[#2D4F44] leading-snug font-heading italic">
                  "Every great enterprise begins with a story, and ours begins in the salt-rich landscape of Kutch, Gujarat."
                </p>
              </div>

              {/* Paragraph Blocks */}
              <div className="mt-2 space-y-6">
                <p>
                  Growing up in Kutch, near the ports of Mundra and Kandla, Aayush witnessed how the region's salt industry connects India to global markets. Raised in a family associated with salt manufacturing, he developed a deep understanding of quality, reliability, and the value of long-term relationships.
                </p>
                <p>
                  After earning his MBA from Nirma University, he combined traditional industry knowledge with modern business practices to build a globally focused enterprise. Today, as the Founder of PDJ TRADE CONNECT, his vision is to deliver premium-quality edible and industrial salt while building lasting partnerships based on trust, consistency, and excellence.
                </p>
                <p>
                  For Aayush, exporting salt is more than a business expansion. It is about carrying the legacy of Kutch, the spirit of Indian manufacturing, and the values of integrity and quality to international shores.
                </p>
              </div>

            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Mentor;
