import React from 'react';
import { Sparkles, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { BusinessConfig } from '../data/businessConfig';

interface AboutProps {
  config: BusinessConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider mb-2">
            Local Recreation Destination
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight text-balance">
            Welcome to Canadian Swimming Pool
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Located in Ludhiana off GT Road Jassian, Canadian Swimming Pool offers a dedicated aquatic escape for local residents, families, and young swimmers seeking refreshing recreation, water exercise, and family time.
          </p>
        </div>

        {/* 2-Column Split: Editorial Story + Key Reassurances */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Narrative Focus */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-slate-700 leading-relaxed text-base">
            <div className="space-y-4">
              <p>
                Canadian Swimming Pool provides a clean, welcoming environment featuring distinct pool spaces—a spacious main pool for family swimming and general recreation, alongside a separate shallow children’s pool (Alag Pool) designed for younger kids taking their first splash.
              </p>
              <p>
                Our goal is to make swimming simple and accessible for families in and around Ludhiana. Whether you are looking for an energetic summer afternoon with your children, want to practice swimming strokes, or want to escape the city heat, our poolside amenities offer a comfortable community setting.
              </p>
              <p className="text-sm text-slate-500 bg-sky-50/60 p-4 rounded-lg border border-sky-100">
                <span className="font-semibold text-[#073B66]">Direct Verification Policy:</span> We encourage every visitor to call or WhatsApp ahead at <span className="font-semibold text-slate-900">{config.phone}</span> to verify pool depth guidelines, children's batch timings, and current ticket rates before your arrival.
              </p>
            </div>

            {/* Quick Contact & Address Anchor */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Heera Singh Nagar, Ludhiana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <a href={`tel:${config.phoneRaw}`} className="font-semibold text-[#073B66] hover:underline">
                  {config.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Pillars */}
          <div className="lg:col-span-5 bg-[#F1FAFF] p-6 sm:p-8 rounded-2xl border border-sky-100 flex flex-col justify-between">
            <h3 className="text-lg font-bold text-[#073B66] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00AEEF]" />
              <span>What Visitors Appreciate</span>
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#25D9C3] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Separate Children’s Pool (Alag Pool)</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Partitioned shallow water allows children to enjoy safe splashing with parental supervision.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#25D9C3] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Family-Friendly Environment</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Comfortable poolside spaces for parents, family groups, and recreational enthusiasts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#25D9C3] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Clean Amenities & Showers</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Freshwater rinse showers and private changing rooms maintained for visitor comfort.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#25D9C3] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Convenient Jassian Road Location</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Easily reachable near GT Road Jassian and Karol Bagh in Ludhiana with parking space.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-sky-200/60 flex items-center justify-between">
              <span className="text-xs text-slate-500">Need specific batch information?</span>
              <a
                href={`tel:${config.phoneRaw}`}
                className="text-xs font-semibold text-[#073B66] hover:text-[#00AEEF] transition-colors"
              >
                Call Front Desk &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Real Photos Spotlight Bar */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                ★ Authentic Location Photos
              </span>
              <h3 className="text-xl font-bold text-[#073B66] mt-0.5">
                On-Site Views from Canadian Swimming Pool (Ludhiana)
              </h3>
            </div>
            <a
              href="#gallery"
              className="text-xs font-semibold text-[#00AEEF] hover:underline whitespace-nowrap self-start sm:self-auto"
            >
              View Full Gallery Lightbox &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#F1FAFF] rounded-2xl overflow-hidden border border-emerald-200/80 shadow-xs group">
              <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                <img
                  src="/src/assets/images/real/canadian_pool_real_1_high.jpg"
                  alt="Canadian Swimming Pool real photo showing swimming pool area in Ludhiana"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  ✓ Verified Facility Photo
                </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-100">
                <p className="text-sm font-bold text-[#073B66]">Main Swimming Pool Area</p>
                <p className="text-xs text-slate-500 mt-0.5">Real photograph from Google Maps listing at GT Road Jassian, Ludhiana.</p>
              </div>
            </div>

            <div className="bg-[#F1FAFF] rounded-2xl overflow-hidden border border-emerald-200/80 shadow-xs group">
              <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                <img
                  src="/src/assets/images/real/canadian_pool_real_2_high.jpg"
                  alt="Canadian Swimming Pool real photo showing pool deck in Ludhiana"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  ✓ Verified Facility Photo
                </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-100">
                <p className="text-sm font-bold text-[#073B66]">Poolside Deck & Amenities</p>
                <p className="text-xs text-slate-500 mt-0.5">Clean surrounding deck and family swimming partition at the facility.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
