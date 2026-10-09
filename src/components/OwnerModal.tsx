import React, { useState } from 'react';
import { X, Save, RotateCcw, Copy, Check, Settings2, Sliders, Shield } from 'lucide-react';
import { BusinessConfig, saveBusinessConfig, resetBusinessConfig } from '../data/businessConfig';

interface OwnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onUpdateConfig: (updated: BusinessConfig) => void;
}

export const OwnerModal: React.FC<OwnerModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  const [formData, setFormData] = useState<BusinessConfig>({ ...config });
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'general' | 'pricing' | 'hours' | 'json'>('general');

  if (!isOpen) return null;

  const handleGeneralChange = (field: keyof BusinessConfig, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePriceChange = (index: number, price: string, priceNote: string) => {
    const updatedPricing = [...formData.pricing];
    updatedPricing[index] = {
      ...updatedPricing[index],
      price,
      priceNote
    };
    setFormData((prev) => ({ ...prev, pricing: updatedPricing }));
  };

  const handleSave = () => {
    saveBusinessConfig(formData);
    onUpdateConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to restore the verified default settings?')) {
      const reset = resetBusinessConfig();
      setFormData({ ...reset });
      onUpdateConfig(reset);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#073B66] flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#073B66]">Owner Business Settings</h3>
              <p className="text-xs text-slate-500">Configure rates, contact phone, and operating hours</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'general' ? 'bg-[#073B66] text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            General & Contact
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'pricing' ? 'bg-[#073B66] text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Pricing & Packages
          </button>
          <button
            onClick={() => setActiveTab('hours')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'hours' ? 'bg-[#073B66] text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Opening Schedule
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'json' ? 'bg-[#073B66] text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Export JSON
          </button>
        </div>

        {/* Tab 1: General & Contact */}
        {activeTab === 'general' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Business Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleGeneralChange('name', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm border-slate-300"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Phone Number (Displayed)
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleGeneralChange('phone', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm border-slate-300"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                WhatsApp Number (International without +)
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => handleGeneralChange('whatsappNumber', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm border-slate-300"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Full Address
              </label>
              <textarea
                rows={2}
                value={formData.address}
                onChange={(e) => handleGeneralChange('address', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm border-slate-300"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Hero Subheading
              </label>
              <textarea
                rows={2}
                value={formData.heroSubheading}
                onChange={(e) => handleGeneralChange('heroSubheading', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm border-slate-300"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Pricing */}
        {activeTab === 'pricing' && (
          <div className="space-y-6">
            <p className="text-xs text-slate-500">
              Update entry prices or notes for the 3 packages. Set exact INR rates (e.g. ₹150 / session) or keep "Contact for Price".
            </p>

            {formData.pricing.map((card, idx) => (
              <div key={card.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="font-bold text-sm text-[#073B66]">{card.name}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Price Label
                    </label>
                    <input
                      type="text"
                      value={card.price}
                      onChange={(e) => handlePriceChange(idx, e.target.value, card.priceNote)}
                      className="w-full px-3 py-1.5 border rounded-lg text-sm bg-white border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Price Note / Subtitle
                    </label>
                    <input
                      type="text"
                      value={card.priceNote}
                      onChange={(e) => handlePriceChange(idx, card.price, e.target.value)}
                      className="w-full px-3 py-1.5 border rounded-lg text-sm bg-white border-slate-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Opening Hours */}
        {activeTab === 'hours' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Listed Opening Info Notice
              </label>
              <textarea
                rows={2}
                value={formData.openingHoursListing}
                onChange={(e) => handleGeneralChange('openingHoursListing', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm border-slate-300"
              />
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase">Weekly Operating Schedule</h4>
              {formData.scheduleWeekly.map((slot, index) => (
                <div key={index} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
                  <div className="font-bold text-slate-800">{slot.dayRange}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={slot.morningSlot}
                      onChange={(e) => {
                        const updated = [...formData.scheduleWeekly];
                        updated[index].morningSlot = e.target.value;
                        setFormData((prev) => ({ ...prev, scheduleWeekly: updated }));
                      }}
                      placeholder="Morning slot"
                      className="px-2.5 py-1.5 bg-white border rounded text-xs border-slate-300"
                    />
                    <input
                      type="text"
                      value={slot.eveningSlot}
                      onChange={(e) => {
                        const updated = [...formData.scheduleWeekly];
                        updated[index].eveningSlot = e.target.value;
                        setFormData((prev) => ({ ...prev, scheduleWeekly: updated }));
                      }}
                      placeholder="Evening slot"
                      className="px-2.5 py-1.5 bg-white border rounded text-xs border-slate-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: JSON Export */}
        {activeTab === 'json' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">
                Copy this clean JSON to permanently bake into <code>src/data/businessConfig.ts</code>:
              </span>
              <button
                onClick={handleCopyJson}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-md text-xs font-semibold hover:bg-slate-800"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Config JSON'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl overflow-x-auto max-h-60">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}

        {/* Action Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Verified Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            {savedSuccess && (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>Saved to Browser!</span>
              </span>
            )}
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#073B66] hover:bg-[#00AEEF] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
