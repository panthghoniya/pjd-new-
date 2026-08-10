import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Dynamically import all images from the gallery folder
const imageModules = import.meta.glob('../../assets/gallery/*.{png,jpg,jpeg}', { eager: true, import: 'default' });
let photos = Object.values(imageModules).map((src, index) => {
  const filename = src.split('/').pop().toLowerCase();
  return {
    id: index + 1,
    name: `Gallery Image ${index + 1}`,
    image: src,
    filename
  };
}).filter(p => decodeURIComponent(p.filename) !== 'custom branding .jpeg');

// Find exactly the blue factory image and the salt hand image
const factoryIdx = photos.findIndex(p => decodeURIComponent(p.filename) === 'gallery.png');
const saltIdx = photos.findIndex(p => decodeURIComponent(p.filename) === 'gallery2.jpeg');

// The user specifically requested to swap the factory image and the salt image.
if (factoryIdx !== -1 && saltIdx !== -1) {
  const temp = photos[factoryIdx];
  photos[factoryIdx] = photos[saltIdx];
  photos[saltIdx] = temp;
}



const GalleryPhotos = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImg]);

  return (
    <div className="w-full bg-brand-background relative">
      <div className="max-w-[110rem] mx-auto px-4 md:px-10 py-10 md:py-20">
        
        {/* CSS Columns for True Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 w-full space-y-4 md:space-y-6">
          {photos.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="break-inside-avoid relative group overflow-hidden bg-brand-dark/5 rounded-[1.5rem] shadow-sm cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 block"
              />
              <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-brand-accent/80 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-sm shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  View Full
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 z-[10000] border border-white/20 group"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
          >
            <X className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div
            className="relative max-w-7xl w-full max-h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300 pointer-events-none"
          >
            <img
              src={selectedImg.image}
              alt={selectedImg.name}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] pointer-events-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPhotos;
