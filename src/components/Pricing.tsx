import React from 'react';
import { MessageCircle, Phone, Check, Clock, Users } from 'lucide-react';
import { BusinessConfig, PricingCard } from '../data/businessConfig';

interface PricingProps {
  config: BusinessConfig;
}

export const Pricing: React.FC<PricingProps> = ({ config }) => {
  const getPackageWhatsAppUrl = (pkgName: string) => {
    const text = encodeURIComponent(
      `Hello Canadian Swimming Pool, I would like to enquire about the current rate and details for the "${pkgName}".`
    );
    return `https://wa.me/${config.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="pricing" className="py-20 bg-[#F1FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
            Entry & Membership Options
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight">
            Transparent Pool Pricing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Canadian Swimming Pool welcomes daily swimmers, family outings, and monthly fitness enthusiasts. Rates are provided directly by management to ensure up-to-date seasonal accuracy.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {config.pricing.map((card: PricingCard) => {
            const isFeatured = card.recommended;

            return (
              <div
                key={card.id}
                className={`rounded-2xl transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-white border-2 border-[#00AEEF] shadow-lg relative -translate-y-1'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Ribbon if featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#00AEEF] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                      Popular for Families
                    </span>
                  </div>
                )}

                {/* Card Header & Price */}
                <div className="p-6 sm:p-8 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-[#073B66]">
                    {card.name}
                  </h3>
                  
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {card.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {card.priceNote}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#00AEEF] shrink-0" />
                      <span><strong>Duration:</strong> {card.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#00AEEF] shrink-0" />
                      <span><strong>Covered:</strong> {card.peopleCovered}</span>
                    </div>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                      Included with Pass:
                    </h4>
                    <ul className="space-y-2.5">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <Check className="w-4 h-4 text-[#25D9C3] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Terms text */}
                  <div className="text-xs text-slate-400 border-t border-slate-100 pt-3">
                    <strong>Terms:</strong> {card.terms}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2.5 pt-2">
                    <a
                      href={getPackageWhatsAppUrl(card.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all shadow-sm ${
                        isFeatured
                          ? 'bg-[#00AEEF] hover:bg-[#009bd6] text-white'
                          : 'bg-[#073B66] hover:bg-[#0b4a7f] text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${config.phoneRaw}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 hover:text-[#073B66] hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call for Today’s Rate</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Policy Disclaimer */}
        <div className="mt-12 bg-white rounded-xl p-5 border border-slate-200 max-w-2xl mx-auto text-center text-xs text-slate-500 leading-relaxed shadow-xs">
          <p>
            <strong>Note on Official Rates:</strong> Ticket charges, monthly subscriptions, and summer special passes are confirmed directly by Canadian Swimming Pool management. We do not invent discounts or false pricing; please contact <strong>{config.phone}</strong> for verified rate sheets.
          </p>
        </div>

      </div>
    </section>
  );
};
