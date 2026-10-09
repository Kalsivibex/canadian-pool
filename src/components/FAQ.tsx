import React, { useState } from 'react';
import { ChevronDown, Phone, HelpCircle } from 'lucide-react';
import { BusinessConfig, FAQItem } from '../data/businessConfig';

interface FAQProps {
  config: BusinessConfig;
}

export const FAQ: React.FC<FAQProps> = ({ config }) => {
  // Open the first item by default for great UX
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    faq1: true,
    faq2: true
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Answers to common questions from parents and visitors visiting Canadian Swimming Pool in Ludhiana.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {config.faqs.map((faq: FAQItem) => {
            const isOpen = !!openItems[faq.id];

            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-slate-900 hover:text-[#00AEEF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-inset"
                >
                  <span className="text-base sm:text-lg font-bold text-[#073B66]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-[#00AEEF]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F1FAFF]/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unconfirmed details prompt */}
        <div className="mt-12 text-center p-6 bg-sky-50/70 rounded-2xl border border-sky-100">
          <p className="text-sm font-semibold text-[#073B66]">
            Have another question not answered above?
          </p>
          <p className="text-xs text-slate-600 mt-1">
            Our team is happy to assist you with pool depth details, current batch availability, or family entries.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href={`tel:${config.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#073B66] hover:bg-[#00AEEF] rounded-lg transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us: {config.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
