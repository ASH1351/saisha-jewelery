import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { GoldSectionDivider } from './GemFacetOrnament';
import { getWhatsAppLink } from '../data/products';

export default function ShopByCategory({ onSelectCategory }) {
  return (
    <section id="collections" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <GoldSectionDivider
          subtitle="CURATED LUXURY"
          title="Shop by Category"
        />
        
        <p className="text-center text-brand-espresso/70 max-w-2xl mx-auto -mt-2 mb-14 text-sm sm:text-base font-sans">
          From light-catching solitaire drops to intricately woven gold chains, explore jewellery crafted to elevate your everyday and festive elegance.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-brand-ivory border border-brand-gold/30 hover:border-brand-gold transition-all duration-500 hover:shadow-gold-md flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-cream">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle Gold Tint Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge if present */}
                {cat.badge && (
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-brand-ivory/90 backdrop-blur-md text-[9px] font-label uppercase tracking-widest text-brand-brown font-semibold border border-brand-gold/30">
                    {cat.badge}
                  </span>
                )}

                {/* Hover Reveal WhatsApp / Enquire Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-3">
                  <a
                    href={getWhatsAppLink(`Hi Saisha Jewelry! I would like to see your latest catalogue for ${cat.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3.5 py-1.5 rounded-full bg-brand-ivory text-brand-espresso font-label text-[11px] font-bold uppercase tracking-wider shadow-gold-sm hover:bg-gold-gradient transition-all border border-brand-gold flex items-center gap-1.5"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-3 h-3 text-brand-gold-dark" />
                  </a>
                </div>
              </div>

              {/* Text Info Container */}
              <div className="p-3 text-center bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-brand-espresso group-hover:text-brand-gold-dark transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-brand-brown/80 font-sans line-clamp-1 mt-0.5">
                    {cat.tagline}
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-brand-gold/15 flex items-center justify-center gap-1 text-[10px] font-label uppercase tracking-widest text-brand-gold-dark font-medium">
                  <span>Explore Pieces</span>
                  <span className="text-xs">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
