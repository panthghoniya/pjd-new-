import React, { useState, useEffect } from 'react';
import { Settings, Package, Droplet, Scale, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { logo } from '../../assets/images';

// ============================================================================
// CONFIGURATION: IMAGE & LOGO PATHS
// ============================================================================
// Replace these with your own images! For example:
// import retailPackImg from '../../assets/retail-pack.jpg';
// const RETAIL_PACK_IMG = retailPackImg;

const RETAIL_PACK_OPTIONS = [
  {
    name: '500 Gram Packs',
    image: 'https://i1-e.pinimg.com/736x/1e/b0/1c/1eb01cf1404c1906e55393cc84c60cdb.jpg',
    desc: 'Premium 500g pouch packaging with high-barrier protection to prevent moisture.'
  },
  {
    name: '1 KG Packs',
    image: 'https://i.pinimg.com/736x/b2/1c/26/b21c26b1ee2055c96b9fa1953f059353.jpg',
    desc: 'Standard 1 Kg stand-up pouches and pillow bags, ideal for supermarkets and retail stores.'
  },
  {
    name: 'Standard Canister Packing',
    image: 'https://i.pinimg.com/736x/78/2d/44/782d443c724829b1145ae1ef6a3c0d59.jpg',
    desc: 'Elegant tabletop salt shaker canisters with easy-to-use rotary sifting caps.'
  },
  {
    name: 'Plastic Bottle Packing',
    image: 'https://i.pinimg.com/736x/35/68/93/35689389e8b2fc7ae9aec8d4cfbe02f8.jpg',
    desc: 'Durable PET bottles and grinders with secure seals, perfect for premium table salt grades.'
  }
];
const WOVEN_BAGS_IMG = "https://i1-e.pinimg.com/736x/02/45/66/02456640978067f5aceeb150f9fad56d.jpg";
const FIBC_JUMBO_IMG = "https://i1-e.pinimg.com/736x/51/6f/32/516f325e5b7b15ebf4c4148f0d24c329.jpg";

// Add your logo image path here to replace the box icon in the OEM section
const OEM_LOGO_IMG = logo; // Example: "https://your-domain.com/logo.png"
// ============================================================================

const items = [
  { icon: Settings, title: 'Grain Size', desc: 'Fine powder to coarse crystals — any mesh size as per your requirement.' },
  { icon: Droplet, title: 'Purity Grade', desc: 'Food, pharma & industrial grades available with lab certification.' },
  { icon: Package, title: 'Packaging', desc: 'From 500g retail packs to 1.4 MT jumbo bags with custom branding.' },
  { icon: Scale, title: 'Additives', desc: 'Iodization (15-100 ppm), anti-caking & mineral fortification as per your specs.' },
];

const Customization = () => {
  const ref = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRetailIndex, setActiveRetailIndex] = useState(0);

  // Auto-play retail packaging slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRetailIndex((prev) => (prev + 1) % RETAIL_PACK_OPTIONS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <section ref={ref} className={`relative bg-brand-background py-12 md:py-20 ${isModalOpen ? 'z-[9999]' : 'z-40'}`}>
      <div className="w-full max-w-[110rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div data-animate="fade-up" className="text-center mb-6 md:mb-12">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark/50 mb-1 md:mb-2 block">
            Custom Orders
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-brand-dark leading-tight px-4 sm:px-0">
            We Customize Salt <span className="text-brand-dark/60">For You</span>
          </h2>
        </div>

        {/* 4 Cards — 1 col on mobile, 2 on sm/md, 4 on lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              data-animate="fade-up"
              data-delay={i * 100}
              className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 bg-white border border-brand-dark/10 rounded-2xl p-4 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-auto sm:h-auto sm:mb-8 sm:mt-2 bg-brand-dark/5 sm:bg-transparent rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-dark/50 group-hover:text-brand-dark transition-colors duration-300" />
              </div>

              {/* Text */}
              <div className="flex-grow">
                <h3 className="text-brand-dark font-semibold text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-brand-dark/60 text-[11px] sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-animate="fade-up" data-delay="500" className="text-center mt-8 md:mt-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-brand-dark hover:bg-brand-black text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-xl"
          >
            View Customization Details →
          </button>
        </div>

      </div>

      {/* DETAILED CUSTOMIZATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-black/80 backdrop-blur-md transition-opacity duration-500"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-[95vw] md:w-full max-w-[80rem] max-h-[92vh] md:max-h-[85vh] overflow-x-hidden overflow-y-auto bg-brand-background rounded-[1.5rem] md:rounded-[2rem] shadow-2xl animate-in fade-in zoom-in-95 duration-300 custom-scrollbar">

            {/* Header Sticky */}
            <div className="sticky top-0 bg-brand-background/95 backdrop-blur-xl border-b border-brand-dark/10 px-4 py-4 md:px-10 md:py-6 flex gap-3 justify-between items-start md:items-center z-50">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl md:text-3xl font-heading font-bold text-brand-dark tracking-tight leading-tight break-words">Complete Customization</h2>
                <p className="text-brand-dark/60 text-[10px] md:text-sm mt-0.5 md:mt-1 font-medium truncate sm:whitespace-normal">Tailored salt solutions for your business.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-brand-dark/5 hover:bg-brand-accent hover:text-white rounded-full transition-colors flex-shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 md:p-10 space-y-8 md:space-y-12 overflow-hidden">

              {/* Top 3 Processes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Process 1 */}
                <div className="bg-white rounded-[1.5rem] p-6 md:p-8 border border-brand-dark/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6">
                    <Settings className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-3">Grain Size Customization</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                    We offer precise milling, crushing, and sieving to deliver the exact particle size your specific process requires.
                  </p>
                  <ul className="space-y-3">
                    {['Fine Powder (Table Salt)', 'Medium Crystal (Cooking)', 'Coarse Crystal (Industrial)', 'Extra Coarse (Water Softening)'].map(t => (
                      <li key={t} className="flex items-start gap-3 text-sm text-brand-dark/80 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process 2 */}
                <div className="bg-white rounded-[1.5rem] p-6 md:p-8 border border-brand-dark/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/20 flex items-center justify-center mb-6">
                    <Droplet className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-3">Purity & Grade Selection</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                    From standard industrial to ultra-pure food and pharma grades, we rigorously meet international quality parameters.
                  </p>
                  <ul className="space-y-3">
                    {['Food Grade (99%+ NaCl)', 'Industrial Grade (98% NaCl)', 'Pharma Grade (Ultra Pure)', 'De-icing Salt'].map(t => (
                      <li key={t} className="flex items-start gap-3 text-sm text-brand-dark/80 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process 3 */}
                <div className="bg-white rounded-[1.5rem] p-6 md:p-8 border border-brand-dark/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark/10 flex items-center justify-center mb-6">
                    <Scale className="w-6 h-6 text-brand-dark" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-3">Additives & Fortification</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">
                    Enhance your salt with necessary additives based on your regional, dietary, or industrial requirements.
                  </p>
                  <ul className="space-y-3">
                    {['Iodization (15-100 ppm)', 'Anti-Caking Agent (PFC)', 'Free-Flowing Agents', 'Mineral Fortification'].map(t => (
                      <li key={t} className="flex items-start gap-3 text-sm text-brand-dark/80 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-dark flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Big Packaging Section */}
              <div className="bg-brand-dark text-brand-light rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-8 md:p-12 overflow-hidden relative shadow-2xl">
                {/* Background Watermark */}
                <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none transform rotate-12">
                  <Package className="w-64 h-64 md:w-96 md:h-96" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-6 md:mb-10 border-b border-white/10 pb-6 md:pb-8">
                    <div className="max-w-3xl flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold mb-2 md:mb-4 text-white leading-tight break-words">Custom Packaging Solutions</h3>
                      <p className="text-white/70 text-[13px] md:text-lg leading-relaxed">
                        Safe, hygienic, and export-ready packaging tailored to your requirements. We offer high-quality PP woven bags with inner liner, jumbo bags, canisters, plastic bottles, and retail packs with custom branding, logo, artwork and barcode options to meet global market standards.
                      </p>
                    </div>
                    <div className="flex-shrink-0 self-start md:self-auto">
                      <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-semibold text-[10px] md:text-sm">
                        OEM & Private Label Available
                      </span>
                    </div>
                  </div>

                  {/* Packaging Types Grid - Image Top, Details Below */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">

                    {/* Pack 1 - Bulk Packaging */}
                    <div className="group flex flex-col bg-brand-black/40 rounded-[2rem] overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-accent/20">

                      {/* Image */}
                      <div className="w-full h-48 sm:h-56 md:h-72 relative overflow-hidden bg-white/5">
                        <img src={WOVEN_BAGS_IMG} alt="Bulk Packaging" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-brand-black/60 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10">
                          <span className="text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-wider">Bulk Packaging</span>
                        </div>
                      </div>

                      {/* Details Below Image */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <h3 className="font-heading font-bold text-white text-2xl tracking-wide mb-3 group-hover:text-brand-accent transition-colors">Bulk Packaging</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                          Multiple bulk packing options available based on customer requirements.
                        </p>
                        <ul className="space-y-1.5 mt-auto border-t border-white/10 pt-4">
                          {['20 KG Bags', '25 KG Bags', '40 KG Bags', '50 KG Bags', '1.4 MT Jumbo Bags'].map(item => (
                            <li key={item} className="flex items-center gap-2 text-white/80 text-xs md:text-sm font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pack 2 - Retail Packaging Carousel */}
                    <div className="group flex flex-col bg-brand-black/40 rounded-[2rem] overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/20">

                      {/* Image Container with Carousel Controls */}
                      <div className="w-full h-48 sm:h-56 md:h-72 relative overflow-hidden bg-white/5 group/carousel">
                        {/* Slide Images Container */}
                        <div className="w-full h-full relative">
                          {RETAIL_PACK_OPTIONS.map((item, idx) => (
                            <div
                              key={item.name}
                              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeRetailIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Top Tag */}
                        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-brand-black/60 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10 z-20">
                          <span className="text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-wider">Retail Packaging</span>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveRetailIndex((prev) => (prev === 0 ? RETAIL_PACK_OPTIONS.length - 1 : prev - 1));
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-brand-black/60 hover:bg-brand-accent text-white p-2 rounded-full border border-white/10 transition-colors z-20 opacity-0 group-hover/carousel:opacity-100"
                        >
                          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveRetailIndex((prev) => (prev + 1) % RETAIL_PACK_OPTIONS.length);
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-brand-black/60 hover:bg-brand-accent text-white p-2 rounded-full border border-white/10 transition-colors z-20 opacity-0 group-hover/carousel:opacity-100"
                        >
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>

                        {/* Indicator Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                          {RETAIL_PACK_OPTIONS.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveRetailIndex(idx);
                              }}
                              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${idx === activeRetailIndex ? 'bg-brand-accent w-4 md:w-5' : 'bg-white/40 hover:bg-white/60'
                                }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Details Below Image */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <h3 className="font-heading font-bold text-white text-2xl tracking-wide mb-3 group-hover:text-brand-accent transition-colors">Retail Packaging</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                          Consumer-ready retail packaging solutions for domestic and
                          international <br/> markets.
                        </p>

                        <ul className="space-y-1.5 mt-auto border-t border-white/10 pt-4">
                          {RETAIL_PACK_OPTIONS.map((item, idx) => (
                            <li
                              key={item.name}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveRetailIndex(idx);
                              }}
                              className={`flex items-center gap-2 text-xs md:text-sm font-semibold cursor-pointer transition-all duration-300 ${idx === activeRetailIndex
                                  ? 'text-brand-accent translate-x-1.5 scale-105'
                                  : 'text-white/80 hover:text-white hover:translate-x-1'
                                }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeRetailIndex ? 'bg-brand-accent scale-125' : 'bg-white/40'
                                }`}></span>
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pack 3 - Custom Branding */}
                    <div className="group flex flex-col bg-brand-black/40 rounded-[2rem] overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-accent/20">

                      {/* Image */}
                      <div className="w-full h-48 sm:h-56 md:h-72 relative overflow-hidden bg-white/5">
                        <img src={FIBC_JUMBO_IMG} alt="Custom Branding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-brand-black/60 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10">
                          <span className="text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-wider">Custom Branding</span>
                        </div>
                      </div>

                      {/* Details Below Image */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <h3 className="font-heading font-bold text-white text-2xl tracking-wide mb-3 group-hover:text-brand-accent transition-colors">Custom Branding</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                          We provide customized packaging with your artwork, branding, design, and private labels as per market requirements.
                        </p>
                        <ul className="space-y-1.5 mt-auto border-t border-white/10 pt-4">
                          {['Custom Artwork', 'Private Label', 'Brand Printing', 'Export Ready Packaging'].map(item => (
                            <li key={item} className="flex items-center gap-2 text-white/80 text-xs md:text-sm font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* OEM Full Width Banner removed as requested */}
                </div>
              </div>

              {/* Action Section */}
              <div className="flex flex-col items-center justify-center py-4 md:py-8">
                <p className="text-brand-dark/70 text-sm md:text-lg mb-4 md:mb-6 text-center max-w-2xl">
                  Ready to discuss your specific requirements? Our team of experts is here to help you configure the perfect custom order.
                </p>
                <a
                  href="/contact"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto text-center bg-brand-accent hover:bg-brand-teal text-white font-bold text-base md:text-lg px-8 py-3.5 md:px-10 md:py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(91,162,152,0.4)] hover:-translate-y-1"
                >
                  Send Inquiry Now
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Customization;
