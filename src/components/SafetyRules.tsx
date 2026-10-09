import React from 'react';
import { ShieldCheck, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { BusinessConfig, RuleItem } from '../data/businessConfig';

interface SafetyRulesProps {
  config: BusinessConfig;
}

export const SafetyRules: React.FC<SafetyRulesProps> = ({ config }) => {
  return (
    <section id="rules" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
            Pool Guidelines & Hygiene
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight">
            Safety & Pool Rules
          </h2>
          <p className="mt-3 text-base text-slate-600">
            For the comfort, cleanliness, and peace of mind of every visiting family, we ask all swimmers to review and observe our common-sense pool guidelines.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.safetyRules.map((rule: RuleItem, idx: number) => {
            const isImportant = rule.severity === 'important';

            return (
              <div
                key={rule.id}
                className={`p-6 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                  isImportant
                    ? 'bg-sky-50/50 border-sky-200/70'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isImportant
                      ? 'bg-[#00AEEF] text-white shadow-xs'
                      : 'bg-slate-100 text-[#073B66]'
                  }`}
                >
                  {isImportant ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-base font-bold text-[#073B66]">
                      {rule.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helpful Advice Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#073B66] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#25D9C3] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Visiting with first-time or toddler swimmers?
              </h4>
              <p className="text-xs text-sky-100 mt-0.5">
                Our staff is happy to direct you to the dedicated shallow pool area and answer any safety queries upon arrival.
              </p>
            </div>
          </div>

          <a
            href={`tel:${config.phoneRaw}`}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#073B66] bg-white hover:bg-sky-50 rounded-lg whitespace-nowrap shadow-xs transition-colors shrink-0"
          >
            Speak to Staff: {config.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
