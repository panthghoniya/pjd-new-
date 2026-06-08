import React from 'react';
import { Award, ShieldCheck, CheckCircle, Globe, FileCheck } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { isoLogo as iso, fssaiLogo as fssai, halalLogo as halal } from '../../assets/images';

const certificates = [
  {
    id: 1,
    name: "ISO 9001:2015",
    description: "Certified Quality Management System ensuring consistent premium grade production.",
    icon: Award,
    logoUrl: iso // Add your certificate image URL here
  },
  {
    id: 2,
    name: "FSSAI Certified",
    description: "Compliant with the Food Safety and Standards Authority of India for food-grade salt.",
    icon: ShieldCheck,
    logoUrl: fssai // Add your certificate image URL here
  },
  {
    id: 3,
    name: "Halal Certified",
    description: "Meeting all global dietary requirements and compliance standards.",
    icon: Globe,
    logoUrl: halal // Add your certificate image URL here
  }
];

const Testimonials = () => { // Kept name as Testimonials to avoid breaking imports in other files
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-background overflow-hidden relative z-40 border-t border-brand-dark/5">
      <div className="max-w-[110rem] mx-auto px-6 md:px-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          {/* <div data-animate="scale-up" className="inline-flex items-center justify-center p-4 bg-white rounded-2xl mb-6 shadow-sm border border-brand-dark/5">
            <Award className="w-8 h-8 text-brand-accent" />
          </div> */}
          <h2 data-animate="fade-up" data-delay="100" className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-brand-dark tracking-tight leading-tight mb-6">
            Licenses & <span className="text-brand-accent">Certifications</span>
          </h2>
          <p data-animate="fade-up" data-delay="200" className="text-lg text-brand-dark/60 leading-relaxed font-jarkarta">
            Our commitment to unmatched quality and absolute safety is backed by globally recognized certifications and strict international compliance standards.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              data-animate="fade-up"
              data-delay={100 * (index + 1)}
              className="group bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-brand-dark/5 flex flex-col items-center text-center"
            >
              {/* Logo/Icon Container */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                {cert.logoUrl ? (
                  <img src={cert.logoUrl} alt={cert.name} className="w-full h-full object-cover" />
                ) : (
                  <cert.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-accent" strokeWidth={1.5} />
                )}
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">
                {cert.name}
              </h3>
              <p className="text-brand-dark/60 leading-relaxed font-jarkarta">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
