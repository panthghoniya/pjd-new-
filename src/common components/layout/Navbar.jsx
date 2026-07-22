import React, { useState, useEffect, useRef } from 'react';
import { logo } from '../../assets/images';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi', flag: '🇮🇳' },
  { code: 'ar', label: 'Arabic', flag: '🇸🇦' },
  { code: 'zh-CN', label: 'Chinese', flag: '🇨🇳' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸' },
  { code: 'ru', label: 'Russian', flag: '🇷🇺' },
  { code: 'pt', label: 'Portuguese', flag: '🇵🇹' },
  { code: 'ja', label: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', label: 'Korean', flag: '🇰🇷' },
  { code: 'tr', label: 'Turkish', flag: '🇹🇷' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const langRef = useRef(null);
  const location = useLocation();
  const forceSolid = 
    location.pathname.includes('/product/') || 
    location.pathname === '/privacy-policy' || 
    location.pathname === '/terms-conditions';
  const isSolid = isScrolled || forceSolid;

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setIsLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Inject Google Translate widget script (hidden) — works on localhost
  useEffect(() => {
    if (document.getElementById('gt-script')) return;

    // Create container for Google Translate OUTSIDE of React's tree to prevent re-render issues
    if (!document.getElementById('gt-hidden-widget')) {
      const gtContainer = document.createElement('div');
      gtContainer.id = 'gt-hidden-widget';
      gtContainer.style.display = 'none';
      gtContainer.style.visibility = 'hidden';
      gtContainer.style.position = 'absolute';
      gtContainer.style.top = '-9999px';
      document.body.appendChild(gtContainer);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
        'gt-hidden-widget'
      );
    };

    const s = document.createElement('script');
    s.id = 'gt-script';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true;
    document.body.appendChild(s);

    // MutationObserver: remove GT banner iframe the instant it appears in DOM
    const observer = new MutationObserver(() => {
      const banner = document.querySelector('iframe.goog-te-banner-frame');
      if (banner) {
        banner.style.display = 'none';
        banner.style.height = '0';
      }
      // Also reset body top offset GT sets
      if (document.body.style.top && document.body.style.top !== '0px') {
        document.body.style.top = '0';
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => observer.disconnect();
  }, []);

  // Programmatically change language via GT's internal select
  const handleSelectLanguage = (lang) => {
    setSelectedLang(lang);
    setIsLangOpen(false);

    const doTranslate = () => {
      const select = document.querySelector('.goog-te-combo');
      if (!select) {
        // If it's still not available, try one more time later
        setTimeout(() => {
          const retrySelect = document.querySelector('.goog-te-combo');
          if (retrySelect) {
            retrySelect.value = lang.code;
            retrySelect.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
          }
        }, 1000);
        return;
      }
      select.value = lang.code;
      select.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    };

    // Wait a tick for GT to be ready on first use
    if (document.querySelector('.goog-te-combo')) {
      doTranslate();
    } else {
      setTimeout(doTranslate, 800);
    }
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Products', to: '/product' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolid || isMobileMenuOpen
            ? 'bg-brand-background/95 backdrop-blur-md border-b border-brand-dark/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3'
            : 'bg-transparent py-5 md:py-6'
          }`}
      >
        <div className="max-w-[110rem] mx-auto px-6 md:px-10 flex justify-between items-center">

          {/* Logo */}
          <Link 
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex-shrink-0 cursor-pointer flex items-center gap-2 sm:gap-3 relative z-50 min-w-0"
          >
            <img src={logo} alt="PDJ Trade Connect" className="h-[40px] md:h-[48px] lg:h-[55px] xl:h-[65px] w-auto object-contain transition-all duration-300 flex-shrink-0" />
            <div className="flex flex-col justify-center min-w-0">
              <span className={`font-bold text-[13px] sm:text-base md:text-lg xl:text-xl tracking-tight font-clash transition-colors duration-300 leading-tight truncate ${isSolid || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}>
                PDJ <span className="tracking-wider"> TRADE</span> CONNECT
              </span>
              <h5 className={`block text-[8px] sm:text-[10px] md:text-[11px] italic xl:text-xs mt-0.5 transition-colors duration-300 opacity-90 leading-tight truncate font-jakarta font-medium ${isSolid || isMobileMenuOpen ? 'text-[#2D4F44]' : 'text-white'}`}>
                Connecting Global Market with Quality
              </h5>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={() => {
                  if (location.pathname === to) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`text-[13px] xl:text-sm font-bold font-jakarta transition-all duration-300 tracking-wide hover:text-brand-accent ${isSolid ? 'text-brand-dark/80' : 'text-white/90'
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Right: Language + CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">

            {/* Language Switcher */}
            <div ref={langRef} className="relative notranslate">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5 text-sm font-semibold font-jakarta ${isSolid
                    ? 'border-brand-dark/20 text-brand-dark/80 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/5'
                    : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                  }`}
              >
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="hidden lg:inline">{selectedLang.flag} {selectedLang.label}</span>
                <span className="lg:hidden">{selectedLang.flag}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {isLangOpen && (
                <div className="absolute top-[calc(100%+10px)] right-0 w-52 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.14)] border border-black/5 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-[9999]">
                  <div className="px-4 py-3 border-b border-black/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent flex items-center gap-1.5">
                      <Globe className="w-3 h-3" /> Select Language
                    </p>
                  </div>
                  <div className="max-h-72 overflow-y-auto">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleSelectLanguage(lang)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${selectedLang.code === lang.code
                            ? 'bg-brand-accent/10 text-brand-accent font-semibold'
                            : 'text-brand-dark/80 hover:bg-brand-dark/5'
                          }`}
                      >
                        <span className="text-lg leading-none">{lang.flag}</span>
                        <span className="font-medium flex-1">{lang.label}</span>
                        {selectedLang.code === lang.code && <Check className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get in Touch */}
            <Link
              to="/contact#contact-form"
              className={`px-6 py-2.5 rounded-full font-bold font-jakarta text-sm transition-all duration-300 border inline-block ${isSolid
                  ? 'bg-brand-dark text-white border-brand-dark hover:bg-brand-accent hover:border-brand-accent'
                  : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-brand-dark'
                }`}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center relative z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors duration-300 ${isSolid || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-background transition-all duration-500 ease-in-out flex flex-col items-center justify-center space-y-8 lg:hidden overflow-hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-6 pt-4">
          {navLinks.map(({ label, to }, idx) => (
            <div key={label} className="animate-in fade-in slide-in-from-right-8 duration-500" style={{ animationDelay: `${200 + idx * 100}ms` }}>
              <Link
                to={to}
                className="text-3xl font-clash font-bold text-brand-dark hover:text-brand-accent transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname === to) {
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }
                }}
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
        <Link
          to="/contact#contact-form"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mx-6 mt-auto mb-10 w-[80%] max-w-[280px] text-center py-4 rounded-xl font-bold font-jakarta bg-brand-accent text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 delay-700"
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
};

export default Navbar;
