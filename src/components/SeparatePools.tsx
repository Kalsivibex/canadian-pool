import React, { useState } from 'react';
import { Users, Baby, Clock, IndianRupee, ShieldAlert, Check, MessageCircle } from 'lucide-react';
import { BusinessConfig, PoolInfo } from '../data/businessConfig';

interface SeparatePoolsProps {
  config: BusinessConfig;
}

export const SeparatePools: React.FC<SeparatePoolsProps> = ({ config }) => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getWhatsAppPoolUrl = (poolTitle: string) => {
    const text = encodeURIComponent(
      `Hello Canadian Swimming Pool, I would like to enquire about the ${poolTitle} timings, entry fee, and rules.`
    );
    return `https://wa.me/${config.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="pools" className="py-20 bg-[#F1FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
            Partitioned Swimming Zones
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight">
            Separate Family & Children's Pools
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Canadian Swimming Pool features distinct swimming areas ensuring everyone—from active adults to toddlers learning water comfort—has a comfortable, appropriate, and monitored space.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {config.pools.map((pool: PoolInfo) => {
            const isChildrenPool = pool.id === 'children-pool';
            const hasError = imgErrors[pool.id];

            return (
              <div
                key={pool.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  {!hasError ? (
                    <img
                      src={pool.image}
                      alt={pool.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(pool.id)}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-sky-200 text-[#073B66] p-6 text-center">
                      {isChildrenPool ? <Baby className="w-12 h-12 text-[#00AEEF] mb-2" /> : <Users className="w-12 h-12 text-[#073B66] mb-2" />}
                      <span className="font-bold text-lg">{pool.title}</span>
                    </div>
                  )}

                  {/* Gradient Overlay & Category Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073B66]/85 via-transparent to-black/20" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-white/95 text-[#073B66] text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                      {isChildrenPool ? 'Specialized Kids Zone' : 'All-Ages Recreation'}
                    </span>
                    <span className="bg-emerald-600 text-white text-[11px] font-bold px-2 py-1 rounded-md shadow-xs">
                      ★ Actual Pool Photo
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {pool.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-sky-100 mt-1 line-clamp-1">
                      {pool.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-b border-slate-100 pb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase">
                        {isChildrenPool ? <Baby className="w-3.5 h-3.5 text-[#00AEEF]" /> : <Users className="w-3.5 h-3.5 text-[#073B66]" />}
                        <span>Target Audience</span>
                      </div>
                      <p className="text-slate-800 font-medium text-xs sm:text-sm">{pool.audience}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase">
                        <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                        <span>Timings</span>
                      </div>
                      <p className="text-slate-800 font-medium text-xs sm:text-sm">{pool.timings}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase">
                        <IndianRupee className="w-3.5 h-3.5 text-[#00AEEF]" />
                        <span>Entry Price</span>
                      </div>
                      <p className="text-slate-800 font-medium text-xs sm:text-sm">{pool.entryPrice}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                        <span>Depth & Access</span>
                      </div>
                      <p className="text-slate-800 font-medium text-xs sm:text-sm">{pool.depth}</p>
                    </div>
                  </div>

                  {/* Pool Highlights */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Facility Highlights
                    </h4>
                    <ul className="space-y-2">
                      {pool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <Check className="w-4 h-4 text-[#25D9C3] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Supervision & Safety Notice */}
                  <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-3.5 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Supervision & Policy: </span>
                      {pool.supervisionNote}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href={getWhatsAppPoolUrl(pool.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                        isChildrenPool
                          ? 'bg-[#00AEEF] hover:bg-[#009bd6] text-white'
                          : 'bg-[#073B66] hover:bg-[#094c82] text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{isChildrenPool ? 'Enquire About Children’s Pool' : 'Enquire About Family Pool'}</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Verification banner below pools */}
        <div className="mt-12 bg-white rounded-xl p-4 sm:p-5 border border-slate-200 text-center max-w-2xl mx-auto shadow-xs text-xs sm:text-sm text-slate-600">
          <p>
            * Specific batch schedules, age cutoffs, and entry fees are confirmed directly with the facility. Please verify daily pool operating slots by calling{' '}
            <a href={`tel:${config.phoneRaw}`} className="font-bold text-[#073B66] underline">
              {config.phone}
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};
