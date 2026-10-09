/**
 * Canadian Swimming Pool – Family & Child Separate Pool
 * Ludhiana, Punjab, India
 * Phone: +91 94179 70015
 */

import React, { useState } from 'react';
import { getSavedBusinessConfig, BusinessConfig } from './data/businessConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SeparatePools } from './components/SeparatePools';
import { Facilities } from './components/Facilities';
import { Pricing } from './components/Pricing';
import { SwimmingLessons } from './components/SwimmingLessons';
import { PhotoGallery } from './components/PhotoGallery';
import { SafetyRules } from './components/SafetyRules';
import { LocationAndContact } from './components/LocationAndContact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { OwnerModal } from './components/OwnerModal';
import { PrivacyModal, TermsModal } from './components/LegalModals';

export default function App() {
  const [config, setConfig] = useState<BusinessConfig>(() => getSavedBusinessConfig());
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F1FAFF] text-[#102A43]">
      {/* 1. Header / Navigation (Strict 3-zone contract) */}
      <Navbar
        config={config}
        onOpenOwnerModal={() => setIsOwnerModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero config={config} />

        {/* 3. About Section */}
        <About config={config} />

        {/* 4. Separate Pools (Family & Children's) */}
        <SeparatePools config={config} />

        {/* 5. Facilities & Amenities */}
        <Facilities config={config} />

        {/* 6. Pricing & Passes */}
        <Pricing config={config} />

        {/* 7. Swimming Lessons & Coaching */}
        <SwimmingLessons config={config} />

        {/* 8. Photo Gallery & Lightbox */}
        <PhotoGallery config={config} />

        {/* 9. Safety & Pool Rules */}
        <SafetyRules config={config} />

        {/* 10. Location, Timings & Contact Form */}
        <LocationAndContact config={config} />

        {/* 11. FAQ Accordion */}
        <FAQ config={config} />
      </main>

      {/* 12. Footer */}
      <Footer
        config={config}
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
        onOpenOwnerModal={() => setIsOwnerModalOpen(true)}
      />

      {/* 13. Mobile Persistent Sticky Bar (<= 15% viewport height) */}
      <MobileStickyBar config={config} />

      {/* Modals & Overlays */}
      <OwnerModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
        config={config}
        onUpdateConfig={setConfig}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        config={config}
      />

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        config={config}
      />
    </div>
  );
}
