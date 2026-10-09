import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BusinessConfig } from '../data/businessConfig';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
}

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose, config }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#00AEEF]" />
            <h3 className="text-lg font-bold text-[#073B66]">Privacy Policy</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            At <strong>{config.legalName}</strong>, we respect your privacy. This policy describes our handling of customer contact details submitted through our website or direct enquiries.
          </p>
          <h4 className="font-bold text-slate-800">1. Information We Collect</h4>
          <p>
            When you contact us via telephone, WhatsApp, or through our website contact form, we only collect the information you choose to provide (such as your name, phone number, and visit details).
          </p>
          <h4 className="font-bold text-slate-800">2. How We Use Information</h4>
          <p>
            Contact details are used exclusively to respond to your swimming enquiries, verify batch timings, answer pool admission questions, and coordinate family visits. We never sell or share your phone number with marketing third parties.
          </p>
          <h4 className="font-bold text-slate-800">3. Contact Us</h4>
          <p>
            If you have questions regarding your data, you can reach out directly to the Canadian Swimming Pool desk at <strong>{config.phone}</strong> or visit us at {config.shortAddress}.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#073B66] text-white text-xs font-semibold rounded-lg hover:bg-[#00AEEF] transition-colors"
          >
            Close Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose, config }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#00AEEF]" />
            <h3 className="text-lg font-bold text-[#073B66]">Terms & Pool Guidelines</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            By entering and using the swimming facilities at <strong>{config.legalName}</strong>, all visitors and family members agree to observe the following general terms:
          </p>
          <h4 className="font-bold text-slate-800">1. Children’s Safety & Supervision</h4>
          <p>
            Parents or adult guardians are required to maintain direct visual supervision of their children at all times. Non-swimmers and toddlers must stay in the designated shallow pool with proper supervision.
          </p>
          <h4 className="font-bold text-slate-800">2. Appropriate Swimwear & Hygiene</h4>
          <p>
            Synthetic swimwear is mandatory for pool entry. Rinsing in freshwater showers before entering the water is strictly enforced for water sanitation.
          </p>
          <h4 className="font-bold text-slate-800">3. Health & Medical Awareness</h4>
          <p>
            Individuals with open wounds, infectious conditions, or acute illnesses are kindly asked to refrain from entering the pool water for health hygiene.
          </p>
          <h4 className="font-bold text-slate-800">4. Right of Admission</h4>
          <p>
            Management reserves the right of admission and may ask any patron to leave the premises if safety guidelines, staff instructions, or decorum are compromised.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#073B66] text-white text-xs font-semibold rounded-lg hover:bg-[#00AEEF] transition-colors"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};
