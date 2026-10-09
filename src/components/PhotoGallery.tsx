import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Info } from 'lucide-react';
import { BusinessConfig, GalleryItem } from '../data/businessConfig';

interface PhotoGalleryProps {
  config: BusinessConfig;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'real' | 'family' | 'kids' | 'facilities'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = activeCategory === 'all'
    ? config.gallery
    : config.gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 bg-[#F1FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
            Visual Tour
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight">
            Photo Gallery
          </h2>
          <p className="mt-3 text-base text-slate-600">
            View authentic photographs of Canadian Swimming Pool in Ludhiana, alongside our separate pool areas and poolside amenities.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs gap-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#073B66] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Photos ({config.gallery.length})
            </button>
            <button
              onClick={() => setActiveCategory('real')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeCategory === 'real'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
              }`}
            >
              <span>★ Real Pool Photos</span>
            </button>
            <button
              onClick={() => setActiveCategory('family')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                activeCategory === 'family'
                  ? 'bg-[#073B66] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Family Pool
            </button>
            <button
              onClick={() => setActiveCategory('kids')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                activeCategory === 'kids'
                  ? 'bg-[#073B66] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Children's Pool
            </button>
            <button
              onClick={() => setActiveCategory('facilities')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                activeCategory === 'facilities'
                  ? 'bg-[#073B66] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Facilities
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPhotos.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative bg-white rounded-2xl border overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col ${
                item.isRealBusinessPhoto ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-slate-200'
              }`}
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-[#073B66]/0 group-hover:bg-[#073B66]/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#073B66] p-2.5 rounded-full shadow-md transform scale-90 group-hover:scale-100 duration-200">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                  {item.isRealBusinessPhoto ? (
                    <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      <span>✓ Actual Pool Photo</span>
                    </span>
                  ) : (
                    <span className="bg-white/95 text-[#073B66] text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                      {item.categoryLabel}
                    </span>
                  )}
                  {item.isStockSample && (
                    <span className="bg-[#073B66]/85 text-white text-[11px] font-medium px-2 py-0.5 rounded-md backdrop-blur-xs">
                      Reference Concept
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#073B66] group-hover:text-[#00AEEF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className={item.isRealBusinessPhoto ? 'text-emerald-700 font-semibold' : ''}>
                    {item.isRealBusinessPhoto ? '★ Verified Business Photo' : 'Click to view full photo'}
                  </span>
                  <Eye className="w-3.5 h-3.5 text-[#00AEEF]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on imagery */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 text-center max-w-xl mx-auto">
          <Info className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Photographs represent pool environments and facility features. For current poolside photos or on-site tours, contact management directly.
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Lightbox Bar */}
            <div className="px-6 py-4 bg-slate-950/80 border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">
                  {filteredPhotos[selectedPhotoIndex].title}
                </span>
                <span className="text-xs text-slate-400">
                  ({selectedPhotoIndex + 1} of {filteredPhotos.length})
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Container */}
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredPhotos[selectedPhotoIndex].image}
                alt={filteredPhotos[selectedPhotoIndex].alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="px-6 py-3.5 bg-slate-950 border-t border-white/10 text-xs sm:text-sm text-slate-300 flex items-center justify-between">
              <p>{filteredPhotos[selectedPhotoIndex].caption}</p>
              <span className="text-xs text-sky-400 shrink-0 ml-4 font-medium">
                {filteredPhotos[selectedPhotoIndex].categoryLabel}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
