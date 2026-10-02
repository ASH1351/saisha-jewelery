import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import ProductQuickViewModal from './ProductQuickViewModal';
import { GoldSectionDivider } from './GemFacetOrnament';
import WhatsAppButton from './WhatsAppButton';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export default function FeaturedCollection({ selectedCategory, onSelectCategory }) {
  const [activeTab, setActiveTab] = useState(selectedCategory || 'all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync state if parent changes category
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const tabs = [
    { id: 'all', label: 'All Pieces' },
    { id: 'bracelets', label: 'Bracelets' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'rings', label: 'Rings' },
    { id: 'bangles', label: 'Bangles' },
    { id: 'gift-sets', label: 'Gift Sets' },
  ];

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeTab);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (onSelectCategory) {
      onSelectCategory(tabId);
    }
  };

  return (
    <section id="collection-section" className="py-20 lg:py-28 bg-brand-ivory/60 relative border-y border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <GoldSectionDivider
          subtitle="TIMELESS BRILLIANCE"
          title="Signature Collection"
        />

        <p className="text-center text-brand-espresso/75 max-w-2xl mx-auto -mt-2 mb-10 text-sm sm:text-base font-sans">
          Meticulously finished with 18K gold and mirror-polished faceted gemstones. Every piece is sealed with our proprietary anti-tarnish barrier.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex p-1.5 rounded-full bg-white shadow-sm border border-brand-gold/30 gap-1 sm:gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full font-label text-xs uppercase tracking-wider font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gold-gradient text-brand-espresso shadow-gold-sm'
                    : 'text-brand-brown hover:text-brand-espresso hover:bg-brand-cream/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: 4 columns desktop, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* Custom Order Callout Strip */}
        <div className="mt-16 bg-white rounded-2xl border border-brand-gold/40 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0 text-brand-gold-dark hidden sm:flex">
              <Sparkles className="w-6 h-6 animate-sparkle" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-espresso">
                Looking for Bespoke Sizes, Pairs, or Bridal Curations?
              </h4>
              <p className="text-xs sm:text-sm text-brand-brown mt-0.5 font-sans">
                Our master jewellery stylists can tailor piece lengths or arrange exclusive gift packaging for weddings and milestones.
              </p>
            </div>
          </div>

          <WhatsAppButton
            variant="outline"
            size="md"
            className="shrink-0 uppercase font-label text-xs tracking-wider font-semibold"
            customMessage="Hi Saisha Jewelry! I would like to inquire about a custom jewellery design or size adjustment."
          >
            Request Custom Piece
          </WhatsAppButton>
        </div>

      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <ProductQuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
}
