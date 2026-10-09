import React from 'react';
import {
  Users,
  Baby,
  DoorClosed,
  ShowerHead,
  Armchair,
  ShieldCheck,
  Droplets,
  GraduationCap,
  Car,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { BusinessConfig, FacilityItem } from '../data/businessConfig';

interface FacilitiesProps {
  config: BusinessConfig;
}

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  Baby: <Baby className="w-5 h-5" />,
  DoorClosed: <DoorClosed className="w-5 h-5" />,
  ShowerHead: <ShowerHead className="w-5 h-5" />,
  Armchair: <Armchair className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
};

export const Facilities: React.FC<FacilitiesProps> = ({ config }) => {
  return (
    <section id="facilities" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
            Guest Amenities & Conveniences
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight">
            Pool Facilities & Amenities
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need for a comfortable swimming visit with your family in Ludhiana.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {config.facilities.map((facility: FacilityItem) => (
            <div
              key={facility.id}
              className="bg-[#F1FAFF]/60 hover:bg-[#F1FAFF] border border-sky-100 rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-white border border-sky-100 flex items-center justify-center text-[#00AEEF] shadow-xs mb-4">
                  {iconMap[facility.iconName] || <HelpCircle className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-bold text-[#073B66]">
                  {facility.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-sky-200/40 flex items-center justify-between text-xs text-slate-500">
                <span>Status: Available on premises</span>
                <span className="text-emerald-700 font-medium">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Enquiry Callout */}
        <div className="mt-12 bg-sky-50 rounded-2xl p-6 sm:p-8 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-[#073B66]">
              Have a special requirement or bringing a group?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Contact pool management in advance for group arrangements or locker reservations.
            </p>
          </div>

          <a
            href={`tel:${config.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#073B66] hover:bg-[#00AEEF] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {config.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
