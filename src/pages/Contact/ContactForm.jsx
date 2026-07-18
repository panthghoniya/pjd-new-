import React, { useState, useRef, useEffect } from 'react';
import { Send, ChevronDown, Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { countryData } from '../../utils/countryCodes';


const ContactForm = () => {
  const ref = useScrollAnimation();
  const [searchParams] = useSearchParams();

  // Pre-fill from product inquiry query params
  const productFromUrl = searchParams.get('product') || '';
  const weightFromUrl = searchParams.get('weight') || '';
  const skuFromUrl = searchParams.get('sku') || '';

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countryData.find(c => c.name === 'India') || null);
  const [message, setMessage] = useState(
    productFromUrl
      ? `I am interested in the following product:\n\nProduct: ${productFromUrl}\nSKU: ${skuFromUrl}\nRequired Weight/Packaging: ${weightFromUrl}\n\nPlease provide a quote and further details.`
      : ''
  );
  const countryDropdownRef = useRef(null);

  const filteredCountries = countryData.filter(country => 
    country.name.toLowerCase().includes(countrySearchQuery.toLowerCase()) ||
    country.dialCode.includes(countrySearchQuery)
  );

  // Auto-scroll to form when arriving from product inquiry
  useEffect(() => {
    if (productFromUrl) {
      const el = document.getElementById('contact-form');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [productFromUrl]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div id="contact-form" ref={ref} className="relative bg-brand-background text-brand-dark pt-10 md:pt-20 pb-12 md:pb-16 overflow-hidden px-6 md:px-10">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,79,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,79,68,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none z-0"></div>

      <div className="max-w-[110rem] mx-auto relative z-10">
        
        {/* Form and Map Container */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Form */}
          <div data-animate="fade-right" data-delay="100">
            <h3 className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Contact Us
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.1] mb-12 tracking-[2px] uppercase">
              LET'S GET IN TOUCH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-teal">
                SEND MESSAGE.
              </span>
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-brand-dark/5 border border-brand-dark/20 rounded-xl px-6 py-4 text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:border-brand-accent focus:bg-brand-dark/10 transition-all duration-300 font-light"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                
                {/* Country Dropdown */}
                <div className="relative" ref={countryDropdownRef}>
                  <div 
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                    className="w-full bg-brand-dark/5 border border-brand-dark/20 rounded-xl px-6 py-4 text-brand-dark flex justify-between items-center cursor-pointer hover:bg-brand-dark/10 transition-all duration-300 h-full"
                  >
                    <span className={selectedCountry ? "text-brand-dark" : "text-brand-dark/50 font-light"}>
                      {selectedCountry ? selectedCountry.name : "Select Country"}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isCountryOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {isCountryOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-white border border-brand-dark/10 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                      <div className="p-3 border-b border-brand-dark/5 flex items-center gap-3">
                        <Search className="w-4 h-4 text-brand-dark/40" />
                        <input 
                          type="text" 
                          placeholder="Search countries..." 
                          value={countrySearchQuery}
                          onChange={(e) => setCountrySearchQuery(e.target.value)}
                          className="w-full bg-transparent outline-none text-sm text-brand-dark placeholder:text-brand-dark/30"
                          autoFocus
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto custom-scrollbar">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <div 
                              key={country.name}
                              onClick={() => {
                                setSelectedCountry(country);
                                setIsCountryOpen(false);
                                setCountrySearchQuery('');
                              }}
                              className="px-6 py-3 text-sm text-brand-dark hover:bg-brand-accent hover:text-white cursor-pointer transition-colors flex justify-between items-center"
                            >
                              <span>{country.name}</span>
                              <span className="text-xs opacity-70">{country.dialCode}</span>
                            </div>
                          ))
                        ) : (
                          <div className="px-6 py-4 text-sm text-brand-dark/50 text-center font-light">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Number Input */}
                <div className="w-full bg-brand-dark/5 border border-brand-dark/20 rounded-xl px-6 py-4 flex items-center gap-3 focus-within:border-brand-accent focus-within:bg-brand-dark/10 transition-all duration-300">
                  {selectedCountry && (
                    <span className="text-brand-dark font-medium border-r border-brand-dark/20 pr-3">{selectedCountry.dialCode}</span>
                  )}
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    className="bg-transparent border-none outline-none w-full text-brand-dark placeholder:text-brand-dark/50 font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-brand-dark/5 border border-brand-dark/20 rounded-xl px-6 py-4 text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:border-brand-accent focus:bg-brand-dark/10 transition-all duration-300 font-light"
                />
              </div>

              {/* Product Inquiry Field - only shown when coming from product page */}
              {productFromUrl && (
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={productFromUrl}
                      readOnly
                      className="w-full bg-brand-accent/10 border-2 border-brand-accent/40 rounded-xl px-6 py-4 text-brand-dark font-semibold focus:outline-none cursor-default"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-full">Product</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <textarea
                  placeholder="Message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-brand-dark/5 border border-brand-dark/20 rounded-xl px-6 py-4 text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:border-brand-accent focus:bg-brand-dark/10 transition-all duration-300 font-light resize-none"
                ></textarea>
              </div>

              <button className="group mt-4 bg-brand-accent hover:bg-brand-teal text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 hover:shadow-[0_0_20px_rgba(91,162,152,0.4)]">
                Message Us
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Column: Map */}
          <div data-animate="fade-left" data-delay="300" className="h-[400px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl relative border border-brand-dark/10 group">
            {/* Glass overlay on hover */}
            <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-500 z-10 pointer-events-none"></div>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7341263724934!2d70.13818290844334!3d23.07020703245771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b9692da14dbd%3A0x1c7a03a7978b69c7!2sPDJ%20Trade%20Connect!5e0!3m2!1sen!2sin!4v1784183421306!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-700 ease-in-out" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Map"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactForm;
