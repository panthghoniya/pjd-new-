import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { factory } from '../../assets/images';

const AboutHero = () => {
  return (
    <div className="relative min-h-[80vh] w-full flex flex-col justify-center overflow-hidden bg-brand-dark text-brand-light">
      {/* Background Image - CHANGE URL HERE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${factory})` }}
      ></div>

      {/* Subtle Dark/Green Overlay */}
      <div className="absolute inset-0 bg-brand-dark/40 z-0"></div>

      {/* Seamless Transition Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-background z-0 pointer-events-none" />

      {/* Content */}
      <div className="max-w-[110rem] mx-auto px-6 md:px-10 relative z-20 text-center flex flex-col items-center mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-white">About</span> <span className="text-brand-dark">Us</span>
        </h1>
        {/* <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          A relentless pursuit of quality. We are redefining the global standard for premium salt extraction, refining, and export.
        </p> */}

        {/* Breadcrumb
        <div className="flex items-center gap-3 text-sm md:text-base font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <Link to="/" className="text-white/60 hover:text-brand-accent transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-white/40" />
          <span className="text-brand-dark">About Us</span>
        </div> */}
      </div>
    </div>
  );
};

export default AboutHero;
