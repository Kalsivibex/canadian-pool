import React, { useState } from 'react';
import { Phone, Menu, X, Settings2 } from 'lucide-react';
import { BusinessConfig } from '../data/businessConfig';

interface NavbarProps {
  config: BusinessConfig;
  onOpenOwnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenOwnerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Pools', href: '#pools' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Rules', href: '#rules' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      {/* Top Bar Contract: Brand zone (1-line), Nav links zone (concise), Primary action zone */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#073B66] whitespace-nowrap shrink-0 group focus-visible:ring-2 focus-visible:ring-[#00AEEF] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00AEEF] to-[#073B66] flex items-center justify-center text-white font-black text-lg shadow-sm">
              C
            </div>
            <span className="font-display group-hover:text-[#00AEEF] transition-colors">
              Canadian Swimming Pool
            </span>
          </a>

          {/* Zone 2: Concise Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#00AEEF] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#00AEEF]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Owner quick edit button */}
            <button
              onClick={onOpenOwnerModal}
              title="Edit Business Information (Owner Mode)"
              aria-label="Edit Business Information"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#073B66] hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Edit Details</span>
            </button>

            {/* Primary Action Button */}
            <a
              href={`tel:${config.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#073B66] hover:bg-[#00AEEF] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00AEEF]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-[#00AEEF] hover:bg-sky-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOwnerModal();
                }}
                className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2"
              >
                <Settings2 className="w-4 h-4 text-slate-400" />
                <span>Owner Configuration & Rate Cards</span>
              </button>
              <a
                href={`tel:${config.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#073B66] rounded-lg shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {config.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
