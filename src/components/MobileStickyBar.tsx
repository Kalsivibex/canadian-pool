import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BusinessConfig } from '../data/businessConfig';

interface MobileStickyBarProps {
  config: BusinessConfig;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ config }) => {
  return (
    <aside
      aria-label="Quick Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
      style={{ maxHeight: '64px' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${config.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#073B66] text-white text-xs sm:text-sm font-semibold rounded-lg active:bg-[#00AEEF] transition-colors shadow-2xs whitespace-nowrap min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-[#25D9C3]" />
          <span>Call Front Desk</span>
        </a>

        <a
          href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hello Canadian Swimming Pool, I would like to enquire about visiting and pool entry.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-white text-xs sm:text-sm font-semibold rounded-lg active:bg-[#20ba5a] transition-colors shadow-2xs whitespace-nowrap min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
