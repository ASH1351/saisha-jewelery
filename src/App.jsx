import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ShopByCategory from './components/ShopByCategory';
import FeaturedCollection from './components/FeaturedCollection';
import BrandStory from './components/BrandStory';
import WhyChooseUs from './components/WhyChooseUs';
import Lookbook from './components/Lookbook';
import GiftingSection from './components/GiftingSection';
import CustomerReviews from './components/CustomerReviews';
import FaqSection from './components/FaqSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PageIntroAnimation from './components/PageIntroAnimation';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [introFinished, setIntroFinished] = useState(false);

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    // Smooth scroll to collection section
    const el = document.getElementById('collection-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-espresso font-sans relative selection:bg-brand-gold selection:text-white">
      {/* Page Load Intro Animation */}
      <PageIntroAnimation onComplete={() => setIntroFinished(true)} />

      {/* Sticky Header Navbar */}
      <Navbar onSelectCategory={handleSelectCategory} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trust Strip */}
        <TrustStrip />

        {/* Shop By Category */}
        <ShopByCategory onSelectCategory={handleSelectCategory} />

        {/* Featured Signature Collection */}
        <FeaturedCollection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Brand Story (Craftsmanship & Heritage) */}
        <BrandStory />

        {/* Why Choose Saisha (18K, Skin-friendly, Gifting, Custom) */}
        <WhyChooseUs />

        {/* Lookbook / Gallery */}
        <Lookbook />

        {/* Gifting & Occasions */}
        <GiftingSection />

        {/* Customer Reviews & Testimonials Carousel */}
        <CustomerReviews />

        {/* FAQ & Care Guide */}
        <FaqSection />

        {/* High-Contrast Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Floating WhatsApp and Mobile Sticky Bar */}
      <FloatingWhatsApp />
    </div>
  );
}
