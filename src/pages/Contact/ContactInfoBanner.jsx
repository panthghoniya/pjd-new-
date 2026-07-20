import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactInfoBanner = () => {
  const ref = useScrollAnimation();

  return (
    <>
    <section ref={ref} className="bg-brand-background px-6 md:px-10 pt-12 md:pt-20 pb-20 md:pb-28 relative z-10">
      <div className="max-w-[90rem] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
          
          {/* Email Card */}
          <div data-animate="fade-up" data-delay="100" className="group relative bg-brand-black rounded-[2.5rem] p-8 lg:p-12 border border-white/5 shadow-2xl hover:border-brand-accent/40 hover:shadow-[0_0_40px_rgba(91,162,152,0.2)] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-500 shadow-inner relative">
                <div className="absolute inset-0 bg-brand-accent/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Mail className="w-8 h-8 text-brand-accent relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide uppercase">Email Us</h3>
              <a href="mailto:support@pdjtrade.com" className="text-white/80 hover:text-brand-accent transition-colors font-medium text-[15px] mb-3 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-accent hover:after:w-full after:transition-all after:duration-300">
                support@pdjtrade.com
              </a>
              <a href="mailto:info@pdjtrade.com" className="text-white/50 hover:text-brand-accent transition-colors font-medium text-[15px] relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-accent hover:after:w-full after:transition-all after:duration-300">
                info@pdjtrade.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div data-animate="fade-up" data-delay="200" className="group relative bg-brand-black rounded-[2.5rem] p-8 lg:p-12 border border-brand-accent/20 shadow-2xl hover:border-brand-accent/50 hover:shadow-[0_0_50px_rgba(91,162,152,0.3)] transition-all duration-500 overflow-hidden lg:-translate-y-8">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-accent/30 transition-all duration-500 shadow-inner relative">
                 <div className="absolute inset-0 bg-brand-accent/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Phone className="w-8 h-8 text-brand-accent relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide uppercase">Call Us</h3>
              <a href="tel:+919687474747" className="text-white/90 hover:text-brand-accent transition-colors font-medium text-[15px] mb-3 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-accent hover:after:w-full after:transition-all after:duration-300">
                +91 96874 74747
              </a>
              <a href="tel:+919687424747" className="text-white/60 hover:text-brand-accent transition-colors font-medium text-[15px] relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-accent hover:after:w-full after:transition-all after:duration-300">
                +91 96874 24747
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div data-animate="fade-up" data-delay="300" className="group relative bg-brand-black rounded-[2.5rem] p-8 lg:p-12 border border-white/5 shadow-2xl hover:border-brand-accent/40 hover:shadow-[0_0_40px_rgba(91,162,152,0.2)] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-500 shadow-inner relative">
                 <div className="absolute inset-0 bg-brand-accent/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <MapPin className="w-8 h-8 text-brand-accent relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide uppercase">Visit Us</h3>
              <span className="text-white/80 font-medium text-[15px] mb-2 leading-relaxed">
                'PDJ Trade Connect' Plot NO. 129, Sector 12B,
              </span>
              <span className="text-white/50 font-medium text-[15px] leading-relaxed">
                Gandhidham, Kachchh, Gujarat 370201
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50/50 px-6 md:px-10 py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info Card */}
          <div className="group bg-white hover:bg-[#1c2a25] rounded-sm p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#1c2a25] hover:shadow-xl transition-all duration-300">
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-[#1a365d] group-hover:text-white transition-colors duration-300 stroke-1" />
            </div>
            <h3 className="text-sm font-bold text-[#1a365d] group-hover:text-white transition-colors duration-300 tracking-widest uppercase mb-6">
              Contact Info
            </h3>
            <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] mb-2 font-medium">
              +91 96874 74747
            </p>
            <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] font-medium">
              info@pdjtrade.com
            </p>
          </div>

          {/* Visit Us Card */}
          <div className="group bg-white hover:bg-[#1c2a25] rounded-sm p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#1c2a25] hover:shadow-xl transition-all duration-300">
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-[#1a365d] group-hover:text-white transition-colors duration-300 stroke-1" />
            </div>
            <h3 className="text-sm font-bold text-[#1a365d] group-hover:text-white transition-colors duration-300 tracking-widest uppercase mb-6">
              Visit Us
            </h3>
            <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] mb-2 font-medium">
              Plot NO. 129, Sector 12B
            </p>
            <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] font-medium">
              Gandhidham, Kachchh, Gujarat
            </p>
          </div>

          {/* Working Hours Card */}
          <div className="group bg-white hover:bg-[#1c2a25] rounded-sm p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#1c2a25] hover:shadow-xl transition-all duration-300">
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-[#1a365d] group-hover:text-white transition-colors duration-300 stroke-1" />
            </div>
            <h3 className="text-sm font-bold text-[#1a365d] group-hover:text-white transition-colors duration-300 tracking-widest uppercase mb-6">
              Working Hours
            </h3>
            <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] mb-2 font-medium">
              Monday - Saturday
            </p>
            <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] mb-2 font-medium">
              8:30 AM - 6:30 PM
            </p>
            <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] font-medium">
              Sunday: Closed
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default ContactInfoBanner;
