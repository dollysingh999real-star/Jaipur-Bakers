/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { CakeItem } from './data/bakeryData';
import { buildOrderPrefill, OccasionOption, scrollToSection } from './utils/quoteForm';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeStrip } from './components/MarqueeStrip';
import { BestsellersSection } from './components/BestsellersSection';
import { OccasionsSection } from './components/OccasionsSection';
import { CustomCakeSection, FormPrefillPayload } from './components/CustomCakeSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BranchesSection } from './components/BranchesSection';
import { Footer } from './components/Footer';

export default function App() {
  const [formPrefill, setFormPrefill] = useState<FormPrefillPayload | null>(null);

  const handleOrderCake = (cake: CakeItem) => {
    const { occasion, message } = buildOrderPrefill(cake.name, cake.weight, cake.price);
    setFormPrefill({
      occasion,
      message,
      nonce: Date.now(),
    });
    scrollToSection('custom-cake');
  };

  const handleSelectOccasionForQuote = (occasion: OccasionOption, label: string) => {
    setFormPrefill({
      occasion,
      message: `Looking for a custom ${label.toLowerCase()} cake. Please call me to discuss design, flavour, and weight.`,
      nonce: Date.now(),
    });
    scrollToSection('custom-cake');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FFF7ED] text-[#2B1A12]">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <MarqueeStrip />
          <BestsellersSection onOrderCake={handleOrderCake} />
          <OccasionsSection onSelectOccasionForQuote={handleSelectOccasionForQuote} />
          <CustomCakeSection prefill={formPrefill} />
          <ReviewsSection />
          <BranchesSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
