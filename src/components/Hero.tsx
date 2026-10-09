import React, { useState } from 'react';
import { Phone, Navigation, ShieldCheck, MapPin, Users2 } from 'lucide-react';
import { BusinessConfig } from '../data/businessConfig';

interface HeroProps {
  config: BusinessConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const [activePhoto, setActivePhoto] = useState<'real' | 'concept'>('real');
  const [imageError, setImageError] = useState(false);

  const heroImageSrc =
    activePhoto === 'real'
      ? '/src/assets/images/real/canadian_pool_real_hero_landscape.jpg'
      : '/src/assets/images/hero_canadian_pool_1791565175171.jpg';

  return (
    <section className="relative overflow-hidden bg-[#073B66] text-white">
      {/* Background Photography with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            key={heroImageSrc}
            src={heroImageSrc}
            alt="Canadian Swimming Pool real photo in Ludhiana Punjab"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#073B66] via-[#0B4A7F] to-[#00AEEF]/60" />
        )}
        {/* Measured dark gradient scrim for 4.5:1+ text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073B66]/95 via-[#073B66]/85 to-[#073B66]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#073B66] via-transparent to-black/35" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          {/* Photo Switcher Badge */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/20 mb-5">
            <button
              onClick={() => setActivePhoto('real')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                activePhoto === 'real'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              ★ Actual Pool Photo (Ludhiana)
            </button>
            <button
              onClick={() => setActivePhoto('concept')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                activePhoto === 'concept'
                  ? 'bg-white/20 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Resort Concept
            </button>
          </div>

          {/* Location & Category Kicker (Clean unboxed text) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#25D9C3] uppercase mb-4">
            <span>Ludhiana, Punjab</span>
            <span aria-hidden="true">·</span>
            <span>Family & Child Separate Pool</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance mb-6">
            {config.heroHeadline}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-sky-100 font-normal leading-relaxed max-w-xl mb-9">
            {config.heroSubheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${config.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#073B66] bg-white hover:bg-sky-50 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Phone className="w-5 h-5 text-[#00AEEF]" />
              <span>Call Now</span>
            </a>

            <a
              href={config.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#00AEEF] hover:bg-[#009bd6] rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Navigation className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Transparent Notice Note */}
          <p className="text-xs text-sky-200/90 mt-4">
            * Please call <span className="font-semibold text-white">{config.phone}</span> prior to visiting to confirm today’s operating slots and entry availability.
          </p>
        </div>
      </div>

      {/* Information Strip across bottom of Hero */}
      <div className="relative z-10 border-t border-white/15 bg-[#073B66]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Strip Item 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#25D9C3] shrink-0">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-sky-200 uppercase font-medium tracking-wider">Separate Pools</p>
                <p className="text-sm font-semibold text-white">Family & Child Alag Pool</p>
              </div>
            </div>

            {/* Strip Item 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#25D9C3] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-sky-200 uppercase font-medium tracking-wider">Ludhiana Location</p>
                <p className="text-sm font-semibold text-white">GT Road Jassian, New Gurnam Nagar</p>
              </div>
            </div>

            {/* Strip Item 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#25D9C3] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-sky-200 uppercase font-medium tracking-wider">Direct Enquiries</p>
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="text-sm font-semibold text-white hover:text-[#25D9C3] transition-colors"
                >
                  {config.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
