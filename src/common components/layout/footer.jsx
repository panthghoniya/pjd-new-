import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, FlaskConical, Globe, Handshake,
  ChevronRight, Phone, Mail, MapPin,
  Send, Shield
} from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { fssaiLogo, halalLogo, isoLogo, logo, factory } from '../../assets/images';

const Footer = () => {
  const ref = useScrollAnimation();

  return (
    <footer ref={ref} className="relative z-40 bg-[#071616] text-white pt-16 md:pt-24 pb-8 overflow-hidden font-sans">
      
      {/* Low Opacity Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: `url(${factory})` }}
      ></div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* Top Grid Area */}
      <div className="max-w-[110rem] mx-auto px-6 md:px-10 relative z-20 w-full mb-16 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12 xl:gap-8">
          
          {/* Col 1: In Association With */}
          <div className="xl:col-span-5 pr-0 xl:pr-10">
            <h3 className="text-sm font-bold mb-8 text-[#10b981] tracking-[0.15em] uppercase">In Association With</h3>
            
            <div className="inline-flex items-center gap-5 bg-white/5 border border-white/10 rounded-[2.5rem] pr-8 p-2.5 mb-8 shadow-sm shadow-black/20">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner">
                <img
                  src="https://media.licdn.com/dms/image/v2/D560BAQFPpeqkQ1lftA/company-logo_200_200/B56ZcWtGuxHwAM-/0/1748432612992/western_india_sea_brines_pvt_ltd_logo?e=2147483647&v=beta&t=8pLpR_-aOhvryP_gPDY_jempHdTYiQ2eHMX2aCVp1-8"
                  alt="Western India Sea Brines"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <span className="text-white font-semibold text-base sm:text-lg leading-snug max-w-[200px]">
                Western India Sea Brines Pvt. Ltd.
              </span>
            </div>

            <p className="text-white/70 text-sm md:text-[15px] leading-relaxed mb-10 font-light pr-2">
              Our association with Western India Sea Brines Pvt. Ltd. strengthens our commitment to consistent quality and reliable supply.
            </p>

            {/* <div className="grid grid-cols-4 gap-4 text-center items-start">
              <div className="flex flex-col items-center gap-3">
                <ShieldCheck className="w-9 h-9 text-[#10b981]" strokeWidth={1.5} />
                <span className="text-[13px] text-white/80 leading-tight">Premium<br/>Quality</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FlaskConical className="w-9 h-9 text-[#10b981]" strokeWidth={1.5} />
                <span className="text-[13px] text-white/80 leading-tight">Advanced<br/>Processing</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Globe className="w-9 h-9 text-[#10b981]" strokeWidth={1.5} />
                <span className="text-[13px] text-white/80 leading-tight">Global<br/>Supply</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Handshake className="w-9 h-9 text-[#10b981]" strokeWidth={1.5} />
                <span className="text-[13px] text-white/80 leading-tight">Trusted<br/>Partnership</span>
              </div>
            </div>
          </div> */}

          {/* Quick Links */}
          <div className="xl:col-span-2 xl:pl-4">
            <h3 className="text-[13px] font-bold mb-6 text-[#10b981] tracking-[0.1em] uppercase">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Our Products', to: '/product' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Certifications', to: '/certifications' },
                { label: 'Downloads', to: '/downloads' },
                { label: 'Contact Us', to: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light text-[15px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="xl:col-span-2">
            <h3 className="text-[13px] font-bold mb-6 text-[#10b981] tracking-[0.1em] uppercase">Resources</h3>
            <ul className="space-y-4">
              {[
                { label: 'FAQs', to: '/#faq' },
                { label: 'Privacy Policy', to: '/privacy-policy' },
                { label: 'Terms of Service', to: '/terms-conditions' },
                { label: 'Quality Policy', to: '/quality-policy' },
                { label: 'Shipping & Delivery', to: '/shipping' },
                { label: 'Support', to: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light text-[15px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect With Us */}
          <div className="xl:col-span-3 xl:pl-8 xl:border-l border-white/10">
            <h3 className="text-[13px] font-bold mb-6 text-[#10b981] tracking-[0.1em] uppercase">Connect With Us</h3>
            <div className="space-y-5 mb-8">
              <a href="tel:+919687474747" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#10b981] group-hover:border-[#10b981] transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-light text-[15px]">+91-96874 74747</span>
              </a>
              <a href="tel:+919687424747" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#10b981] group-hover:border-[#10b981] transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-light text-[15px]">+91-96874 24747</span>
              </a>
              <a href="mailto:support@pdjtrade.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#10b981] group-hover:border-[#10b981] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-light text-[15px]">support@pdjtrade.com</span>
              </a>
              <div className="flex items-start gap-4 text-white/80 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-light text-[14px] leading-relaxed mt-0.5">
                  Sector No - 12B, Plot No. 129,<br />
                  Gandhidham, Kachchh,<br />
                  Gujarat - 370201, India
                </span>
              </div>
            </div>

            <h3 className="text-[13px] font-bold mb-4 text-[#10b981] tracking-[0.1em] uppercase">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <div className="w-full h-px bg-white/10 mb-8 max-w-[110rem] mx-auto opacity-50"></div>

      {/* Bottom Certifications & Subscribe */ }
      <div className="max-w-[110rem] mx-auto px-6 md:px-10 relative z-20 w-full mb-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Logo & Description */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-bold text-xl sm:text-2xl tracking-tight font-clash leading-tight truncate text-white">
                PDJ <span className="tracking-wider"> TRADE</span> CONNECT
              </span>
              <h5 className="block text-xs sm:text-sm mt-0.5 opacity-90 leading-tight truncate font-jakarta font-medium text-white">
                Connecting Global Market with Quality
              </h5>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
            <p className="text-white/80 text-[13px] font-light max-w-xs hidden sm:block leading-snug">
              Manufacturer & Exporter of<br />Edible Grade Salt and Industrial Salt
            </p>
          </div>

          {/* Certifications */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <div className="flex flex-col items-center">
              <img src={fssaiLogo} alt="FSSAI" className="h-10 w-auto object-contain bg-white rounded p-1" />
              <span className="text-[10px] text-white/50 mt-1 uppercase tracking-wider">Licenced</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={halalLogo} alt="Halal" className="h-10 w-auto object-contain bg-white rounded p-1" />
              <span className="text-[10px] text-white/50 mt-1 uppercase tracking-wider">Halal</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={isoLogo} alt="ISO" className="h-10 w-auto object-contain bg-white rounded p-1" />
              <span className="text-[10px] text-white/50 mt-1 uppercase tracking-wider">Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 h-10">
              <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-white uppercase leading-tight">Food Safety</span>
                <span className="text-[11px] font-bold text-white uppercase leading-tight">Certified</span>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col w-full lg:w-auto xl:min-w-[320px]">
            <h3 className="text-[13px] font-bold mb-1 text-[#10b981] tracking-[0.1em] uppercase">Stay Updated</h3>
            <p className="text-white/60 text-xs mb-3">Subscribe to get the latest updates and product news.</p>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-lg overflow-hidden focus-within:border-[#10b981] transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-white px-4 py-2.5 w-full text-sm placeholder:text-white/40"
              />
              <button className="bg-[#10b981] hover:bg-[#0ea5e9] text-white p-2 m-1 rounded-md transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full h-px bg-white/10 mb-6 max-w-[110rem] mx-auto opacity-50"></div>

  {/* Footer Copyright */ }
  <div className="max-w-[110rem] mx-auto px-6 md:px-10 relative z-20 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-light text-white/50 tracking-widest">
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
      <p className="uppercase">© 2024 PDJ TRADE CONNECT. ALL RIGHTS RESERVED.</p>
      <span className="hidden sm:block">|</span>
      <p className="uppercase cursor-pointer hover:text-white text-md transition-colors">MADE BY CODECLOVERS</p>
    </div>
    <div className="flex items-center gap-6 uppercase">
      <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
      <span className="hidden sm:block">|</span>
      <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
      <span className="hidden sm:block">|</span>
      <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
    </div>
  </div>

    </footer >
  );
};

export default Footer;

/* 
//=============================================================================
// OLD FOOTER CODE (COMMENTED OUT AS PER REQUEST)
//=============================================================================
// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import useScrollAnimation from '../../hooks/useScrollAnimation';
// import { factory } from '../../assets/images';
// 
// 
// const OldFooter = () => {
//   const ref = useScrollAnimation();
// 
//   return (
//     <>
//       <footer ref={ref} className="relative z-40 bg-brand-black text-brand-light overflow-hidden pt-24 md:pt-32 flex flex-col justify-between">
// 
//         {/* Low Opacity Background Image *\/}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay pointer-events-none"
//           style={{ backgroundImage: `url(${factory})` }}
//         ></div>
// 
//         {/* Subtle Grid Background *\/}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
// 
//         {/* Main Content Area *\/}
//         <div className="max-w-[110rem] mx-auto px-6 md:px-10 relative z-20 w-full flex-grow flex flex-col justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
// 
//             {/* Association Column *\/}
//             <div data-animate="fade-up" data-delay="100" className="lg:col-span-4 pr-0 lg:pr-12">
//               <h3 className="text-sm font-bold mb-6 text-brand-accent tracking-[0.2em] uppercase">In Association With</h3>
// 
//               <div className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl rounded-full pr-8 p-3 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:border-white/30 group w-fit max-w-full mt-4">
//                 <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden flex-shrink-0">
//                   <img
//                     src="https://media.licdn.com/dms/image/v2/D560BAQFPpeqkQ1lftA/company-logo_200_200/B56ZcWtGuxHwAM-/0/1748432612992/western_india_sea_brines_pvt_ltd_logo?e=2147483647&v=beta&t=8pLpR_-aOhvryP_gPDY_jempHdTYiQ2eHMX2aCVp1-8"
//                     alt="Western India Sea Brines"
//                     className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-1"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <span className="text-white font-heading font-semibold text-base md:text-xl tracking-wide leading-tight group-hover:text-brand-light transition-colors duration-300 max-w-[200px] md:max-w-[280px] whitespace-normal">
//                     Western India Sea Brines Pvt. Ltd.
//                   </span>
//                 </div>
//               </div>
// 
//               {/* <p className="mt-6 text-white/50 text-xs md:text-sm leading-relaxed max-w-sm font-light">
//                 Western India Sea Brines is a leading manufacturer and processor of industrial and edible grade salt since 1996, committed to excellence and global standards.Western India Sea Brines is a leading manufacturer and processor of industrial and edible grade salt since 1996, committed to
//               </p> *\/}
//             </div>
// 
//             {/* Spacer *\/}
//             <div className="hidden lg:block lg:col-span-1"></div>
// 
//             {/* Quick Links 1 *\/}
//             <div data-animate="fade-up" data-delay="200" className="lg:col-span-2">
//               <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Quick Links</h3>
//               <ul className="space-y-4">
//                 {[
//                   { label: 'Home', to: '/' },
//                   { label: 'About Us', to: '/about' },
//                   { label: 'Our Products', to: '/product' },
//                   { label: 'Gallery', to: '/gallery' },
//                   { label: 'Contact Us', to: '/contact' }
//                 ].map((link) => (
//                   <li key={link.label}>
//                     <Link to={link.to} className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light text-lg">
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
// 
//             {/* Quick Links 2 *\/}
//             <div data-animate="fade-up" data-delay="300" className="lg:col-span-2">
//               <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Resources</h3>
//               <ul className="space-y-4">
//                 {[
//                   { label: 'F.A.Q', to: '/#faq' },
//                   { label: 'Privacy Policy', to: '/privacy-policy' },
//                   { label: 'Terms of Service', to: '/terms-conditions' },
//                   { label: 'Support', to: '/contact' }
//                 ].map((link) => (
//                   <li key={link.label}>
//                     <Link to={link.to} className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light text-lg">
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
// 
//             {/* Contact Details *\/}
//             <div data-animate="fade-left" data-delay="300" className="lg:col-span-3 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0">
//               <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Connect With Us</h3>
//               <div className="mb-6">
//                 <p className="text-2xl md:text-2xl font-heading font-extrabold text-white mb-1 tracking-tight">+91-9687474747</p>
//                 <p className="text-2xl md:text-2xl font-heading font-extrabold text-white tracking-tight">+91-9687424747</p>
//               </div>
//               <a href="mailto:support@pdjtrade.com" className="text-brand-accent hover:text-white transition-colors mb-8 inline-block text-lg font-medium">
//                 support@pdjtrade.com
//               </a>
//               {/* <p className="text-white/50 text-sm font-light leading-relaxed max-w-[250px] mb-8">
//                 'PDJ Trade Connect'<br /> Plot NO. 129, Sector 12B, <br /> Gandhidham, Kachchh, <br /> Gujarat 370201
//               </p> *\/}
//               <div className="flex items-center gap-4">
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-lg">
//                   <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white hover:border-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-lg">
//                   <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
//                 </a>
//               </div>
//             </div>
// 
//           </div>
//         </div>
// 
//         {/* Bottom Area *\/}
//         <div className="relative w-full flex flex-col items-center justify-end mt-auto">
// 
//           <div className="w-full max-w-[110rem] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 mb-8 relative z-30">
//             <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-4 md:mb-0 text-center md:text-left">
//               <p className="text-white/30 text-xs tracking-widest uppercase font-semibold">
//                 © 2024 PDJ Trade Connect. All Rights Reserved.
//               </p>
//               <p className="text-xs tracking-widest uppercase font-bold cursor-pointer codeclovers-blink">
//                 Made by Codeclovers
//               </p>
//             </div>
//           </div>
// 
//           {/* The HUGE Text *\/}
//           <div className="w-full relative overflow-hidden flex justify-center pt-10 pb-6">
//             <h1
//               className="hidden md:block sm:text-[9vw] sm:text-[9.5vw] md:text-[9.5vw] font-sans font-bold leading-none whitespace-nowrap select-none uppercase text-white/[0.08] transform scale-y-[1.4] origin-bottom transition-all duration-300"
//             >
//               PDJ Trade Connect
//             </h1>
//           </div>
//         </div>
// 
//       </footer>
//     </>
//   );
// };
// 
// export default OldFooter;
*/
