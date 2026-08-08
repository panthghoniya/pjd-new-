import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Uses flagcdn.com — free, no API key, always works
// Format: https://flagcdn.com/w80/ae.png  (ae = ISO 2-letter code, lowercase)
const countriesData = [
  { id: 1, name: 'Malaysia', code: 'my', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 2, name: 'Vietnam', code: 'vn', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 3, name: 'Indonesia', code: 'id', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 4, name: 'Thailand', code: 'th', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 5, name: 'Philippines', code: 'ph', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 6, name: 'Singapore', code: 'sg', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 7, name: 'UAE', code: 'ae', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 8, name: 'Oman', code: 'om', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 9, name: 'Saudi Arabia', code: 'sa', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 10, name: 'Qatar', code: 'qa', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 11, name: 'Kuwait', code: 'kw', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 12, name: 'Bahrain', code: 'bh', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 13, name: 'Kenya', code: 'ke', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 14, name: 'Tanzania', code: 'tz', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 15, name: 'South Africa', code: 'za', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 16, name: 'Ghana', code: 'gh', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 17, name: 'Mozambique', code: 'mz', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 18, name: 'Senegal', code: 'sn', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 19, name: 'Madagascar', code: 'mg', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 20, name: 'Mauritius', code: 'mu', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 21, name: 'Seychelles', code: 'sc', bg: 'bg-white', text: 'text-brand-dark' },
  { id: 22, name: 'Australia', code: 'au', bg: 'bg-white', text: 'text-brand-accent' },
  { id: 23, name: 'Fiji', code: 'fj', bg: 'bg-white', text: 'text-brand-dark' },
];

// Triple the list for seamless marquee loop
const marqueeItems = [...countriesData, ...countriesData, ...countriesData];

const LogoSection = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="relative z-40 py-16 md:py-24 bg-brand-background overflow-hidden border-y border-brand-dark/5">

      {/* Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 data-animate="fade-up" className="text-3xl md:text-[2.5rem] font-heading text-brand-dark tracking-tight font-bold">
          Our Global <span className="text-brand-accent">Reach</span>
        </h2>
        <div data-animate="scale-up" data-delay="200" className="w-16 h-[3px] bg-brand-accent mx-auto mt-4 rounded-full" />
      </div>

      {/* Marquee Track */}
      <div data-animate="fade-up" data-delay="300" className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {marqueeItems.map((country, idx) => (
            <div
              key={`${country.id}-${idx}`}
              className={`mx-3 md:mx-4 flex-shrink-0 w-36 h-36 md:w-44 md:h-44 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center gap-3 ${country.bg} transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] border border-brand-dark/5`}
            >
              {/* Flag image via flagcdn.com — no API key needed */}
              <div className="w-14 h-10 md:w-16 md:h-11 rounded-md overflow-hidden shadow-md border border-black/5 flex-shrink-0">
                <img
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  srcSet={`https://flagcdn.com/w160/${country.code}.png 2x`}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className={`font-bold text-xs md:text-sm tracking-wider uppercase text-center px-3 whitespace-normal leading-tight ${country.text}`}>
                {country.name}
              </span>
            </div>
          ))}
        </div>

        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-background to-transparent z-10 pointer-events-none" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      ` }} />
    </section>
  );
};

export default LogoSection;
