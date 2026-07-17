import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { factory } from '../../assets/images';


const Footer = () => {
  const ref = useScrollAnimation();

  return (
    <>
      <footer ref={ref} className="relative z-40 bg-brand-black text-brand-light overflow-hidden pt-24 md:pt-32 flex flex-col justify-between">

        {/* Low Opacity Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url(${factory})` }}
        ></div>

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        {/* Main Content Area */}
        <div className="max-w-[110rem] mx-auto px-6 md:px-10 relative z-20 w-full flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* Association Column */}
            <div data-animate="fade-up" data-delay="100" className="lg:col-span-4 pr-0 lg:pr-12">
              <h3 className="text-sm font-bold mb-6 text-brand-accent tracking-[0.2em] uppercase">In Association With</h3>

              <div className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl rounded-full pr-8 p-3 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:border-white/30 group w-fit max-w-full mt-4">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden flex-shrink-0">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D560BAQFPpeqkQ1lftA/company-logo_200_200/B56ZcWtGuxHwAM-/0/1748432612992/western_india_sea_brines_pvt_ltd_logo?e=2147483647&v=beta&t=8pLpR_-aOhvryP_gPDY_jempHdTYiQ2eHMX2aCVp1-8"
                    alt="Western India Sea Brines"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-1"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-white font-heading font-semibold text-base md:text-xl tracking-wide leading-tight group-hover:text-brand-light transition-colors duration-300 max-w-[200px] md:max-w-[280px] whitespace-normal">
                    Western India Sea Brines Pvt. Ltd.
                  </span>
                </div>
              </div>

              {/* <p className="mt-6 text-white/50 text-xs md:text-sm leading-relaxed max-w-sm font-light">
                Western India Sea Brines is a leading manufacturer and processor of industrial and edible grade salt since 1996, committed to excellence and global standards.Western India Sea Brines is a leading manufacturer and processor of industrial and edible grade salt since 1996, committed to
              </p> */}
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Quick Links 1 */}
            <div data-animate="fade-up" data-delay="200" className="lg:col-span-2">
              <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About Us', to: '/about' },
                  { label: 'Our Products', to: '/product' },
                  { label: 'Gallery', to: '/gallery' },
                  { label: 'Contact Us', to: '/contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light text-lg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div data-animate="fade-up" data-delay="300" className="lg:col-span-2">
              <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Resources</h3>
              <ul className="space-y-4">
                {[
                  { label: 'F.A.Q', to: '/#faq' },
                  { label: 'Privacy Policy', to: '/privacy-policy' },
                  { label: 'Terms of Service', to: '/terms-conditions' },
                  { label: 'Support', to: '/contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light text-lg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div data-animate="fade-left" data-delay="300" className="lg:col-span-3 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0">
              <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Connect With Us</h3>
              <div className="mb-6">
                <p className="text-2xl md:text-2xl font-heading font-extrabold text-white mb-1 tracking-tight">+91-9687474747</p>
                <p className="text-2xl md:text-2xl font-heading font-extrabold text-white tracking-tight">+91-9687424747</p>
              </div>
              <a href="mailto:support@pdjtrade.com" className="text-brand-accent hover:text-white transition-colors mb-8 inline-block text-lg font-medium">
                support@pdjtrade.com
              </a>
              {/* <p className="text-white/50 text-sm font-light leading-relaxed max-w-[250px] mb-8">
                'PDJ Trade Connect'<br /> Plot NO. 129, Sector 12B, <br /> Gandhidham, Kachchh, <br /> Gujarat 370201
              </p> */}
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Area */}
        <div className="relative w-full flex flex-col items-center justify-end mt-auto">

          <div className="w-full max-w-[110rem] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 mb-8 relative z-30">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-4 md:mb-0 text-center md:text-left">
              <p className="text-white/30 text-xs tracking-widest uppercase font-semibold">
                © 2024 PDJ Trade Connect. All Rights Reserved.
              </p>
              <p className="text-xs tracking-widest uppercase font-bold cursor-pointer codeclovers-blink">
                Made by Codeclovers
              </p>
            </div>
          </div>

          {/* The HUGE Text */}
          <div className="w-full relative overflow-hidden flex justify-center pt-10 pb-6">
            <h1
              className="hidden md:block sm:text-[9vw] sm:text-[9.5vw] md:text-[9.5vw] font-sans font-bold leading-none whitespace-nowrap select-none uppercase text-white/[0.08] transform scale-y-[1.4] origin-bottom transition-all duration-300"
            >
              PDJ Trade Connect
            </h1>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
