import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const waNumber = '919687474747'; // Replace with your WhatsApp number (country code + number)
  const waMessage = encodeURIComponent('Hello! I am interested in your salt products. Please provide more details.');
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-center gap-3">

      {/* Scroll to Top — on TOP, appears after scrolling */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'translateY(0)' : 'translateY(12px)',
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
        className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-[0_4px_16px_rgba(45,79,68,0.35)] hover:bg-brand-dark hover:shadow-[0_6px_24px_rgba(45,79,68,0.45)] hover:-translate-y-1 transition-colors duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* WhatsApp Button — BELOW scroll-to-top, always visible */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all duration-300"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        }}
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.65 4.907 1.888 7.044L2 30l7.18-1.876A13.93 13.93 0 0016.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.413a11.625 11.625 0 01-5.93-1.629l-.425-.252-4.26 1.114 1.133-4.138-.278-.44A11.588 11.588 0 014.41 16.004c0-6.398 5.206-11.601 11.594-11.601 6.388 0 11.593 5.203 11.593 11.601 0 6.395-5.205 11.41-11.593 11.41zm6.347-8.667c-.347-.175-2.055-1.014-2.374-1.13-.318-.116-.55-.174-.782.174-.23.348-.9 1.13-1.103 1.362-.203.23-.404.26-.752.086-.347-.175-1.465-.54-2.79-1.722-1.03-.92-1.725-2.055-1.927-2.403-.202-.347-.021-.535.152-.707.156-.156.347-.405.52-.608.173-.203.23-.348.347-.58.116-.232.058-.436-.029-.608-.087-.174-.782-1.885-1.073-2.58-.282-.677-.568-.585-.782-.596l-.666-.012c-.23 0-.608.087-.927.434-.318.348-1.216 1.188-1.216 2.898s1.245 3.361 1.418 3.594c.174.231 2.45 3.737 5.938 5.239.83.358 1.477.572 1.982.732.833.264 1.591.227 2.19.138.668-.1 2.055-.84 2.345-1.651.29-.81.29-1.506.202-1.651-.086-.145-.318-.232-.666-.406z"/>
        </svg>
      </a>

    </div>
  );
};

export default FloatingButtons;
