import React, { useEffect, useRef } from 'react';
import saltImg from '../../assets/HomePage/Modern Refining Process.png';

export default function Story() {
  const starRef = useRef(null);

  // Scroll-based rotation for the asterisk
  useEffect(() => {
    const handleScroll = () => {
      if (starRef.current) {
        const rotation = window.scrollY * 0.15;
        starRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="why-choose-us" className="relative w-full bg-[#FDFCF7] py-20 lg:py-32 overflow-hidden">

      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 w-full order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[#2D4F44]/10 border border-[#2D4F44]/20 text-[#2D4F44] font-bold tracking-widest uppercase text-xs mb-4">
                Our Story
              </span>
              {/* Reduced heading font size to keep it on ~2 lines */}
              <h3 className="text-[#2D4F44] font-heading text-[clamp(2rem,3.5vw,3.25rem)] font-black leading-[1.15] tracking-tight max-w-[20ch]">
                From India's Salt Heartland to Global Markets
              </h3>
            </div>

            <div className="flex flex-col gap-6 text-[#2D4F44]/80 font-medium leading-relaxed text-sm md:text-base">
              <p>
                Founded with a vision to deliver high-quality Indian salt to global markets, PDJ Trade Connect has grown into a trusted exporter of premium refined free-flowing iodized and industrial salts.
              </p>
              <p>
                With deep roots in the salt industry and access to one of the world’s largest salt-producing regions in Gujarat, India, we are committed to supplying products that meet international quality standards and customer-specific requirements.
              </p>
              <p>
                What started as a focused trading initiative has evolved into a customer-driven export business serving clients across multiple industries and international markets. Over the years, we have built our reputation through consistent quality, reliable supply, customized packaging solutions, and timely deliveries.
              </p>
              <p>
                Our strength lies in understanding the unique needs of every customer, from grain size customization and purity specifications to retail and bulk packaging solutions. Whether serving food manufacturers, industrial buyers, wholesalers, or private-label brands, we aim to create long-term partnerships based on trust, transparency, and performance.
              </p>
              <p>
                Today, PDJ Trade Connect continues to expand its global presence while staying committed to quality, customer satisfaction, and sustainable business practices.
              </p>
            </div>
          </div>

          {/* Right Image Container - Stretched to match left content height */}
          <div className="flex-1 w-full order-1 lg:order-2 relative min-h-[350px] lg:min-h-0 lg:pr-16">
            <div className="relative w-full h-full group flex justify-center lg:justify-end">

              {/* Image Wrapper */}
              <div className="relative w-full lg:max-w-[500px] h-[350px] lg:h-full">

                {/* Asterisk decoration (Now scroll-based rotation) */}
                <div
                  ref={starRef}
                  className="absolute -top-16 -right-16 text-[#6B7B6E] hidden md:block -z-10 will-change-transform"
                >
                  <svg width="180" height="180" viewBox="0 0 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(80,80)">
                      <rect x="-12" y="-80" width="24" height="160" rx="12" />
                      <rect x="-12" y="-80" width="24" height="160" rx="12" transform="rotate(60)" />
                      <rect x="-12" y="-80" width="24" height="160" rx="12" transform="rotate(120)" />
                    </g>
                  </svg>
                </div>

                {/* The Image Card - Height 100% to match left column */}
                <div className="relative h-full rounded-[2.5rem] overflow-hidden border border-[#2D4F44]/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-10 bg-white">
                  <img
                    src={saltImg}
                    alt="Premium Salt Processing"
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                  />

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
