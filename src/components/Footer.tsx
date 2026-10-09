import React from 'react';
import { Phone, MapPin, Navigation, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BusinessConfig } from '../data/businessConfig';

interface FooterProps {
  config: BusinessConfig;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenOwnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenPrivacy,
  onOpenTerms,
  onOpenOwnerModal,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#073B66] text-white pt-16 pb-24 lg:pb-12 border-t border-sky-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#00AEEF] flex items-center justify-center text-white font-black text-lg">
                C
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Canadian Swimming Pool
              </span>
            </div>

            <p className="text-xs sm:text-sm text-sky-200 leading-relaxed">
              Family & Child Separate Swimming Pool facility located in Ludhiana, Punjab. Dedicated recreational water spaces designed for safe family leisure, beginner swimmers, and fitness enthusiasts.
            </p>

            <div className="pt-2 text-xs text-sky-300">
              <span className="font-semibold text-white">Listing: </span>
              {config.legalName}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#25D9C3]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-100">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#pools" className="hover:text-white transition-colors">Separate Pools</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing & Passes</a>
              </li>
              <li>
                <a href="#lessons" className="hover:text-white transition-colors">Swimming Lessons</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#rules" className="hover:text-white transition-colors">Pool Rules</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Timings</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#25D9C3]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-sky-100">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {config.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hello Canadian Swimming Pool, I would like to make an enquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Enquiry
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <a href="#contact" className="hover:text-white transition-colors">
                  Opens 6:00 AM Saturday (Seasonal Schedule)
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#25D9C3]">
              Location & Map
            </h4>
            <div className="space-y-2 text-xs text-sky-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <span>{config.shortAddress}</span>
              </div>
              <p className="font-mono text-sky-300">Plus Code: {config.mapsPlusCode}</p>

              <div className="pt-2">
                <a
                  href={config.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors border border-white/15"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300">
          <div>
            &copy; {currentYear} Canadian Swimming Pool (Family & Child Alag Pool). All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              Terms & Pool Guidelines
            </button>
            <button
              onClick={onOpenOwnerModal}
              className="hover:text-[#25D9C3] text-sky-200 transition-colors"
            >
              Owner Settings
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
