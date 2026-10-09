import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Share2,
  Calendar,
  Users
} from 'lucide-react';
import { BusinessConfig } from '../data/businessConfig';

interface LocationAndContactProps {
  config: BusinessConfig;
}

interface FormData {
  fullName: string;
  phone: string;
  poolType: string;
  visitDate: string;
  visitorsCount: string;
  message: string;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ config }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    poolType: 'Both Pools (Family & Kids)',
    visitDate: '',
    visitorsCount: '2',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Canadian Swimming Pool,\n\nI would like to enquire about visiting:\n- Name: ${formData.fullName}\n- Contact: ${formData.phone}\n- Pool Preference: ${formData.poolType}\n- Preferred Date: ${formData.visitDate || 'To be confirmed'}\n- Visitors Count: ${formData.visitorsCount}\n${formData.message ? `- Note: ${formData.message}` : ''}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate instantaneous clean local dispatch with WhatsApp option
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      poolType: 'Both Pools (Family & Kids)',
      visitDate: '',
      visitorsCount: '2',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#F1FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
            Visit & Connect
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight">
            Location, Timings & Enquiries
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions about pool depth, entry fees, or family passes? Call us directly, navigate with Google Maps, or send a booking enquiry.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Hours + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Location & Operating Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Address & Phone Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#073B66] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#00AEEF]" />
                  <span>Pool Location</span>
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
                  {config.legalName}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {config.address}
                </p>
                
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-[#073B66] bg-sky-50 px-3 py-1.5 rounded-md border border-sky-100">
                  <span>Google Maps Plus Code:</span>
                  <strong>{config.mapsPlusCode}</strong>
                </div>
              </div>

              {/* Phone and Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#073B66] hover:bg-[#00AEEF] text-white rounded-lg text-sm font-semibold transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {config.phone}</span>
                </a>

                <a
                  href={config.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 text-[#073B66] border border-slate-300 rounded-lg text-sm font-semibold transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-[#00AEEF]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#073B66] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#00AEEF]" />
                  <span>Opening Hours & Schedule</span>
                </h3>
                <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md font-medium">
                  Seasonal Batches
                </span>
              </div>

              {/* Official Google Listing Status */}
              <div className="p-3.5 bg-sky-50/80 rounded-xl border border-sky-100 text-xs text-slate-700 leading-relaxed">
                <strong className="text-[#073B66]">Listed Directory Note: </strong>
                {config.openingHoursListing}
              </div>

              {/* Weekly Schedule Table */}
              <div className="space-y-3 text-xs sm:text-sm">
                {config.scheduleWeekly.map((slot, idx) => (
                  <div key={idx} className="pb-3 border-b border-slate-100 last:border-none last:pb-0">
                    <div className="flex justify-between font-semibold text-slate-800">
                      <span>{slot.dayRange}</span>
                      <span className="text-[#073B66]">{slot.morningSlot}</span>
                    </div>
                    {slot.eveningSlot && (
                      <div className="text-slate-500 text-xs mt-0.5 flex justify-between">
                        <span>Evening Slot</span>
                        <span>{slot.eveningSlot}</span>
                      </div>
                    )}
                    <p className="text-[11px] text-slate-400 mt-0.5">{slot.note}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                * Timings may shift for water filtration cycles or private events. Please confirm today's schedule via telephone prior to arriving.
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#073B66]">
                  Send a Visit Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your details below. You can send your enquiry directly or instantly continue via WhatsApp to reach management.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Enquiry Prepared Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. For the fastest response, click below to send these details directly to the Canadian Swimming Pool WhatsApp helpline.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${config.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-lg shadow-sm transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Send via WhatsApp Now</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-4 py-3 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Gurpreet Singh"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 transition-colors focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] ${
                        errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number * (10 Digits)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs text-slate-400 font-semibold">
                        +91
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="94179 70015"
                        maxLength={14}
                        className={`w-full pl-12 pr-3.5 py-2.5 rounded-lg border text-sm text-slate-900 transition-colors focus:ring-2 focus:ring-[#00AEEF] focus:border-[#00AEEF] ${
                          errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Pool Type & Visitors count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="poolType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Pool Type
                      </label>
                      <select
                        id="poolType"
                        name="poolType"
                        value={formData.poolType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 bg-white focus:ring-2 focus:ring-[#00AEEF]"
                      >
                        <option value="Both Pools (Family & Kids)">Both Pools (Family & Kids)</option>
                        <option value="Family Swimming Pool">Family Swimming Pool</option>
                        <option value="Children's Swimming Pool">Children’s Separate Pool</option>
                        <option value="Swimming Lessons / Coaching">Swimming Lessons</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="visitorsCount" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Number of Visitors
                      </label>
                      <select
                        id="visitorsCount"
                        name="visitorsCount"
                        value={formData.visitorsCount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 bg-white focus:ring-2 focus:ring-[#00AEEF]"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3-4">3 to 4 People (Family)</option>
                        <option value="5+">5+ People (Group)</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="visitDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date of Visit
                    </label>
                    <input
                      type="date"
                      id="visitDate"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 bg-white focus:ring-2 focus:ring-[#00AEEF]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Questions or Special Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. Enquiring about children pool depth, timings for Saturday morning, or family rates..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-800 focus:ring-2 focus:ring-[#00AEEF]"
                    />
                  </div>

                  {/* Form Submission Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#073B66] hover:bg-[#00AEEF] text-white font-semibold text-sm rounded-lg transition-colors shadow-sm disabled:opacity-70"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Preparing Enquiry...' : 'Submit Enquiry'}</span>
                    </button>

                    <a
                      href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hello Canadian Swimming Pool, I would like to enquire about visiting and pool entry.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm rounded-lg transition-colors shadow-sm whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    * No payment required online. Entry fees and slot confirmations are finalized directly at the pool counter.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
